-- AlterTable
ALTER TABLE `supervision_schedules` ADD COLUMN `isSupervised` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `supervisionCount` INTEGER NOT NULL DEFAULT 0;
