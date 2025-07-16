import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/**
 * Enforces supervision rules:
 * 1. No two lecturers can supervise the same student on the same day.
 * 2. Student must have 2-day gap before next supervision.
 * 3. Lecturer must not have overlapping supervision slots.
 * 4. Prevent duplicate supervision (exact match of time/student/lecturer).
 */
export async function checkSupervisionConflicts({ studentId, lecturerId, date, startTime, endTime }) {

  const student = await prisma.student?.findUnique({ where: { id: studentId } });

  if (student?.assessmentRequested) {
    throw new Error('Learner aleady in assessment process, cannot schedule supervision.');
  }
  const startOfDay = new Date(date);
  startOfDay.setUTCHours(0, 0, 0, 0);

  const endOfDay = new Date(date);
  endOfDay.setUTCHours(23, 59, 59, 999);

  //1. Prevent exact duplicates
  const duplicate = await prisma.supervisionSchedule.findFirst({
    where: {
      studentId,
      lecturerId,
      startDate: startTime,
      endDate: endTime,
    },
  });

  if (duplicate) {
    throw new Error('Exact supervision already exists for this student, lecturer, and time.');
  }

  //2. Prevent different lecturer supervising same student on same day
  const sameDayDifferentLecturer = await prisma.supervisionSchedule.findFirst({
    where: {
      studentId,
      lecturerId: { not: lecturerId },
      startDate: {
        gte: startOfDay,
        lte: endOfDay,
      },
    },
  });

  if (sameDayDifferentLecturer) {
    throw new Error('Student is already supervised by another lecturer on this day.');
  }

  //3. Enforce 2-day gap between supervisions
  const twoDaysAgo = new Date(startOfDay);
  twoDaysAgo.setUTCDate(twoDaysAgo.getUTCDate() - 2);
  twoDaysAgo.setUTCHours(0, 0, 0, 0);

  const recentSupervision = await prisma.supervisionSchedule.findFirst({
    where: {
      studentId,
      startDate: {
        gte: twoDaysAgo,
        lte: endOfDay,
      },
    },
  });

  if (recentSupervision) {
    throw new Error('Student must have a 2-day gap between supervisions.');
  }

  //4. Prevent lecturer overlapping schedules (even with same student)
  const overlappingSupervision = await prisma.supervisionSubject.findFirst({
    where: {
      supervision: {
        lecturerId,
        studentId,
      },
      startTime: { lt: endTime },
      endTime: { gt: startTime },
    },
    include: {
      supervision: true,
    },
  });

  if (overlappingSupervision) {
    throw new Error('Lecturer has a conflicting supervision that overlaps with this time.');
  }
}