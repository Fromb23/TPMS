import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getLecturers = async (req, res) => {
  try {
    const lecturers = await prisma.lecturer.findMany({
      select: {
        id: true,
        department: true,
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

export const getLecturerById = async (req, res) => {
  const { lecturerId } = req.params;

  try {
    const lecturer = await prisma.lecturer.findFirst({
      where: { userId: lecturerId },
      include: {
        user: {
          select: {
            fullName: true,
            email: true,
          },
        },
      },
    });

    if (!lecturer) {
      return res.status(404).json({ message: "Lecturer not found" });
    }

    res.status(200).json(lecturer);
  } catch (error) {
    console.error("Error fetching lecturer:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export const updateLecturerStatus = async (req, res) => {
  const { lecturerId } = req.params;
  const { status } = req.body;

  try {
    const updatedLecturer = await prisma.lecturer.update({
      where: { id: lecturerId },
      data: { status },
    });

    res.status(200).json({
      message: "Lecturer status updated successfully",
      updatedLecturer,
    });
  } catch (error) {
    console.error("Error updating lecturer status:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}