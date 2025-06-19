-- AlterTable
ALTER TABLE `zones` ADD COLUMN `constituencies` JSON NULL,
    ADD COLUMN `coordinator` VARCHAR(191) NULL,
    ADD COLUMN `county` VARCHAR(191) NULL;
