import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createStudentLessonPlan = async (req, res) => {
  const { subject, lessonTitle, startTime, endTime, comments } = req.body;

  try {
    const student = await prisma.student.findFirst({
      where: { userId: req.user.id },
    });

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    const newLessonPlan = await prisma.lessonPlan.create({
      data: {
        subject,
        lessonTitle,
        startTime,
        endTime,
        comments,
        studentId: student.id,
      },
    });

    res.status(201).json({
      message: "Lesson plan created successfully",
      lessonPlan: newLessonPlan,
    });

  } catch (error) {
    console.error("Error creating lesson plan:", error);
    res.status(500).json({ error: "Failed to create lesson plan" });
  }
};

export const getLessonPlanStatusToday = async (req, res) => {
  try {
    const student = await prisma.student.findFirst({
      where: { userId: req.user.id },
    });

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const lessonPlan = await prisma.lessonPlan.findFirst({
      where: {
        studentId: student.id,
        createdAt: {
          gte: today,
        },
      },
    });

    res.status(200).json({ hasSubmitted: !!lessonPlan });

  } catch (error) {
    console.error("Error checking lesson plan status:", error);
    res.status(500).json({ error: "Failed to check lesson plan status" });
  }
};