-- DropForeignKey
ALTER TABLE `supervision_schedules` DROP FOREIGN KEY `supervision_schedules_lecturerId_fkey`;

-- DropForeignKey
ALTER TABLE `supervision_schedules` DROP FOREIGN KEY `supervision_schedules_studentId_fkey`;

-- DropForeignKey
ALTER TABLE `supervision_subjects` DROP FOREIGN KEY `supervision_subjects_supervisionId_fkey`;

-- DropIndex
DROP INDEX `supervision_schedules_lecturerId_fkey` ON `supervision_schedules`;

-- DropIndex
DROP INDEX `supervision_schedules_studentId_fkey` ON `supervision_schedules`;

-- DropIndex
DROP INDEX `supervision_subjects_supervisionId_fkey` ON `supervision_subjects`;

-- AddForeignKey
ALTER TABLE `supervision_schedules` ADD CONSTRAINT `supervision_schedules_lecturerId_fkey` FOREIGN KEY (`lecturerId`) REFERENCES `lecturers`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `supervision_schedules` ADD CONSTRAINT `supervision_schedules_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `students`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `supervision_subjects` ADD CONSTRAINT `supervision_subjects_supervisionId_fkey` FOREIGN KEY (`supervisionId`) REFERENCES `supervision_schedules`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
