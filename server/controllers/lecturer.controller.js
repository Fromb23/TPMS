import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getLecturers = async (req, res) => {
  try {
    const lecturers = await prisma.lecturer.findMany({
      include: {
        user: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    if (!lecturers || lecturers.length === 0) {
      return res.status(404).json({ message: "No lecturers found" });
    }

    res.status(200).json(lecturers);
  } catch (error) {
    console.error("Error fetching lecturers:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
