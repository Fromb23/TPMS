import { PrismaClient } from "@prisma/client";
import { checkSupervisionConflicts } from "../services/supervision.service.js";

const prisma = new PrismaClient();

export const createSupervisionSchedule = async (req, res) => {
  const sessions = req.body;

  const userId = req.user.id;

  if (!Array.isArray(sessions) || sessions.length === 0) {
    return res.status(400).json({ message: 'No supervision data provided.' });
  }

  try {
    const lecturer = await prisma.lecturer.findFirst({
      where: { userId },
    });

    if (!lecturer) {
      return res.status(404).json({ message: 'Lecturer not found' });
    }

    const studentUserId = sessions[0].studentId;

    const student = await prisma.student.findFirst({
      where: { userId: studentUserId },
    });

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    const { date, notes } = sessions[0];

    const subjectData = sessions.map((session) => ({
      name: session.subject,
      startTime: new Date(`${session.date}T${session.startTime}`),
      endTime: new Date(`${session.date}T${session.endTime}`),
    }));

    try {
      await checkSupervisionConflicts({
        studentId: student.id,
        lecturerId: lecturer.id,
        date,
        startTime: subjectData[0].startTime,
        endTime: subjectData[subjectData.length - 1].endTime,
      });
    } catch (conflictError) {
      console.error('Conflict detected:', conflictError.message);
      return res.status(400).json({ error: { message: conflictError.message } });
    }

    const supervision = await prisma.supervisionSchedule.create({
      data: {
        lecturerId: lecturer.id,
        studentId: student.id,
        notes,
        startDate: subjectData[0].startTime,
        endDate: subjectData[subjectData.length - 1].endTime,
        subjects: {
          create: subjectData,
        },
      },
      include: {
        subjects: true,
      },
    });

    await prisma.student.update({
      where: { id: student.id },
      data: {
        assessmentRequested: true,
      },
    });

    res.status(201).json(supervision);
  } catch (error) {
    console.error('Error creating supervision schedule:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getSupervisionScheduleByStudent = async (req, res) => {
  const { studentUserId } = req.params;

  try {
    const student = await prisma.student.findFirst({
      where: { userId: studentUserId },
    });

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    const schedules = await prisma.supervisionSchedule.findMany({
      where: {
        studentId: student.id,
      },
      include: {
        subjects: true,
        lecturer: {
          include: {
            user: true,
          },
        },
      },
      orderBy: {
        startDate: 'desc',
      },
    });

    res.status(200).json(schedules);
  } catch (error) {
    console.error('Error fetching supervision schedules:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const confirmStudentSupervision = async (req, res) => {
  const { supervisionId } = req.params;

  try {
    // Fetch the schedule
    const existing = await prisma.supervisionSchedule.findUnique({
      where: { id: supervisionId },
      include: { student: true },
    });

    if (!existing) {
      return res.status(404).json({ message: "Supervision schedule not found" });
    }

    if (existing.isSupervised) {
      return res.status(400).json({ message: "Supervision already confirmed" });
    }

    // Get student's current count
    const student = await prisma.student.findUnique({
      where: { id: existing.studentId },
    });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    if (student.supervisionCount >= 3) {
      return res.status(400).json({ message: "Maximum number of supervisions reached" });
    }

    // Confirm this supervision + increment student's count
    const [updatedSupervision, updatedStudent] = await prisma.$transaction([
      prisma.supervisionSchedule.update({
        where: { id: supervisionId },
        data: { isSupervised: true },
      }),
      prisma.student.update({
        where: { id: existing.studentId },
        data: {
          supervisionCount: { increment: 1 },
          assessmentRequested: false,
        },
      }),
    ]);

    res.status(200).json({ updatedSupervision, updatedStudent });

  } catch (error) {
    console.error("Error confirming supervision:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const enableStudentSubmitFinalDocument = async (req, res) => {
  const { studentId } = req.params;

  try {
    const student = await prisma.student.findFirst({
      where: { id: studentId },
    });

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    const updatedStudent = await prisma.student.update({
      where: { id: student.id },
      data: { canSubmitFinalDocs: true },
    });

    res.status(200).json(updatedStudent);
  } catch (error) {
    console.error('Error enabling final document submission:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};