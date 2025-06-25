/*
  Warnings:

  - Added the required column `studentId` to the `supervision_schedules` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subject` to the `supervision_schedules` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `supervision_schedules` ADD COLUMN `notes` VARCHAR(191) NULL,
    ADD COLUMN `studentId` VARCHAR(191) NOT NULL,
    ADD COLUMN `subject` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `supervision_schedules` ADD CONSTRAINT `supervision_schedules_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `students`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
