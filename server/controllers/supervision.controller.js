import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createSupervisionSchedule = async (req, res) => {
  const sessions = req.body;
  console.log('Received sessions:', sessions);

  const userId = req.user.id;

  if (!Array.isArray(sessions) || sessions.length === 0) {
    return res.status(400).json({ message: 'No supervision data provided.' });
  }

  try {
    // Find the lecturer using the logged-in user's ID
    const lecturer = await prisma.lecturer.findFirst({
      where: { userId },
    });

    if (!lecturer) {
      return res.status(404).json({ message: 'Lecturer not found' });
    }

    // Extract studentUserId from session (i.e. the frontend is sending student.userId)
    const studentUserId = sessions[0].studentId;

    // Find the student based on userId
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

    res.status(201).json(supervision);
  } catch (error) {
    console.error('Error creating supervision schedule:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getSupervisionScheduleByStudent = async (req, res) => {
  const { studentUserId } = req.params;

  try {
    // Find student by user ID
    const student = await prisma.student.findFirst({
      where: { userId: studentUserId },
    });

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    // Fetch all supervision schedules tied to this student
    const schedules = await prisma.supervisionSchedule.findMany({
      where: {
        studentId: student.id,
      },
      include: {
        subjects: true,
        lecturer: {
          include: {
            user: true, // assuming Lecturer has relation to User
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
    // Fetch current schedule
    const existing = await prisma.supervisionSchedule.findUnique({
      where: { id: supervisionId },
    });

    if (!existing) {
      return res.status(404).json({ message: "Supervision schedule not found" });
    }

    if (existing.isSupervised) {
      return res.status(400).json({ message: "Supervision already confirmed" });
    }

    if (existing.supervisionCount >= 3) {
      return res.status(400).json({ message: "Maximum number of supervisions reached" });
    }

    const updatedSupervision = await prisma.supervisionSchedule.update({
      where: { id: supervisionId },
      data: {
        isSupervised: true,
        supervisionCount: { increment: 1 },
      },
    });

    res.status(200).json(updatedSupervision);
  } catch (error) {
    console.error("Error confirming supervision:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
