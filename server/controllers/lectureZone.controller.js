import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const assignLecturerToZone = async (req, res) => {
  const { lecturerId, zoneId } = req.body;

  try {
	const lecturer = await prisma.lecturer.findUnique({
	  where: { id: lecturerId },
	});

	if (!lecturer) {
	  return res.status(404).json({ message: "Lecturer not found" });
	}

	const lecturerZoneAssignment = await prisma.lecturerZoneAssigned.create({
	  data: {
		lecturerId,
		zoneId,
	  },
	});

	res.status(200).json({
	  message: "Lecturer assigned to zone successfully",
	  lecturerZoneAssignment,
	});
  } catch (error) {
	console.error("Error assigning lecturer to zone:", error);
	res.status(500).json({ message: "Internal server error" });
  }
}