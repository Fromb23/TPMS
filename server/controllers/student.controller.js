import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const fetchStudents = async (req, res) => {
  try {
    const students = await prisma.student.findMany({
      include: {
        user: true,
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
}