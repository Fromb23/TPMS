import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const fetchStudents = async (req, res) => {
  try {
    const students = await prisma.student.findMany({
      include: {
        user: true,
        school: true,
        finalDocument: true,
        documents: {
          where: {
            type: 'TP_APPLICATION'
          },
          select: {
            status: true,
            type: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    if (!students || students.length === 0) {
      return res.status(404).json({ message: "No students found" });
    }

    res.status(200).json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateStudentStatusById = async (req, res) => {
  const { id: studentId } = req.params;
  const { isActive, isBlocked } = req.body;

  try {

    const student = await prisma.student.findUnique({
      where: { id: studentId },
      include: { user: true },
    });

    if (!student || !student.user) {
      return res.status(404).json({ message: "Student or linked user not found" });
    }

    // Step 2: Update user status
    await prisma.user.update({
      where: { id: student.user.id },
      data: {
        ...(isActive !== undefined && { isActive }),
        ...(isBlocked !== undefined && { isBlocked }),
      },
    });

    const updatedStudent = await prisma.student.findUnique({
      where: { id: studentId },
      include: { user: true },
    });

    return res.status(200).json(updatedStudent);
  } catch (error) {
    console.error("Error updating user status:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const fetchStudentById = async (req, res) => {
  const { studentId } = req.params;

  if (!studentId) {
    return res.status(400).json({ message: "Student ID is required" });
  }

  try {
    const student = await prisma.student.findFirst({
      where: { userId: studentId },
      include: {
        user: true,
        documents: true,
        finalDocument: true,
      },
    });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const normalizeStatus = (docArray) =>
      docArray.map((doc) => ({
        ...doc,
        status: doc.status?.toLowerCase() || 'pending',
      }));

    res.status(200).json({
      ...student,
      documents: normalizeStatus(student.documents),
      finalDocument: normalizeStatus(student.finalDocument),
    });
  } catch (error) {
    console.error("Error fetching student by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const confirmStudentWelcome = async (req, res) => {
  const userId = req.user.userId;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      console.log("user not found");
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.role !== 'STUDENT') {
      return res.status(403).json({ error: 'Access denied: User is not a student' });
    }

    const student = await prisma.student.findFirst({
      where: { userId: user.id },
    });
    

    if (!student) {
      return res.status(404).json({ error: 'Student profile not found' });
    }

    await prisma.student.update({
      where: { id: student.id },
      data: { hasSeenWelcome: true },
    });
    

    return res.status(200).json({ message: 'Welcome confirmed successfully' });
  } catch (error) {
    console.error('Error confirming student welcome:', error);
    return res.status(500).json({ error: 'Server error confirming welcome' });
  }
};

export const getStudentDetailsById = async (userId) => {
  console.log("Fetching student details for userId:", userId);
  const student = await prisma.student.findFirst({
    where: { userId },
    include: {
      documents: {
        orderBy: { createdAt: 'desc' },
      },
      finalDocument: {
        orderBy: { createdAt: 'desc' },
      },
      supervisionSchedule: true,
    },
  });

  if (!student) throw new Error("Student not found");

  const mostRecentDoc = student.documents?.[0];
  const finalDoc = student.finalDocument?.[0];

  return {
    hasSeenWelcome: student.hasSeenWelcome,
    documentStatus: mostRecentDoc?.status?.toUpperCase(),
    finalDocumentStatus: finalDoc?.status?.toUpperCase(),
    supervisionCount: student.supervisionSchedule?.length || 0,
    hasSupervisorAssigned: student.supervisionSchedule?.length > 0,
    canSubmitFinalDocs: student.canSubmitFinalDocs ?? false,
  };
};