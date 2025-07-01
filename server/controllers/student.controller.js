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
