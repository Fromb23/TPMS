import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const fetchAllSchools = async (req, res) => {
  try {
    const schools = await prisma.school.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        zone: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    return res.status(200).json(schools);
  } catch (error) {
    console.error("Error fetching schools:", error);
    return res.status(500).json({ error: "Server error while fetching schools" });
  }
};

export const createSchool = async (req, res) => {
  const { name, county, contact, address, zoneId } = req.body;

  try {
    const data = {
      name,
      county,
      contact,
      address,
      approved: true,
    };

    if (zoneId) {
      data.zoneId = zoneId;
    }

    const newSchool = await prisma.school.create({ data });

    return res.status(201).json(newSchool);
  } catch (error) {
    console.error("Error creating school:", error);

    if (error.code === "P2002" && error.meta?.target?.includes("name")) {
      return res.status(409).json({ error: "School with this name already exists." });
    }

    return res.status(500).json({ error: "Server error" });
  }
};

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

