import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const submitRecordOfWork = async (req, res) => {
    try {
        const userId = req.user.id;

        const student = await prisma.student.findFirst({
            where: { userId },
        });

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        const {
            school,
            subject,
            learningArea,
            teacher,
            records = [],
        } = req.body;

        const newRecord = await prisma.recordOfWork.create({
            data: {
                school,
                subject,
                learningArea,
                teacher,
                records,
                student: {
                    connect: { id: student.id },
                },
            },
        });

        res.status(201).json({
            message: "Record of Work submitted successfully",
            recordOfWork: newRecord,
        });

    } catch (error) {
        console.error("Error submitting Record of Work:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getRecordOfWorkStatusToday = async (req, res) => {
  try {
    const userId = req.user.id;

    const student = await prisma.student.findFirst({
      where: { userId },
    });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const recordOfWork = await prisma.recordOfWork.findFirst({
      where: {
        studentId: student.id,
        createdAt: {
          gte: today,
        },
      },
    });

    return res.status(200).json({ hasSubmitted: !!recordOfWork });

  } catch (error) {
    console.error("Error fetching Record of Work status:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
