import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getSchoolDataByStudentId = async (req, res) => {
  const { userId } = req.params;

  try {
    const student = await prisma.student.findFirst({
      where: { userId },
      include: {
        school: {
          include: {
            zone: true,
          },
        },
      },
    });

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    return res.status(200).json({
      student,
      school: student.school,
    });
  } catch (error) {
    console.error("Error fetching school data:", error);
    return res.status(500).json({ error: "Server error" });
  }
};

