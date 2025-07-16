-- AlterTable
ALTER TABLE `schools` ADD COLUMN `approved` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `suggestedById` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `schools` ADD CONSTRAINT `schools_suggestedById_fkey` FOREIGN KEY (`suggestedById`) REFERENCES `students`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
