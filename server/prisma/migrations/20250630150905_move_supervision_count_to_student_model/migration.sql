/*
  Warnings:

  - You are about to drop the column `supervisionCount` on the `supervision_schedules` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `students` ADD COLUMN `supervisionCount` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `supervision_schedules` DROP COLUMN `supervisionCount`;
