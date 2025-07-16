-- DropForeignKey
ALTER TABLE `schools` DROP FOREIGN KEY `schools_zoneId_fkey`;

-- DropIndex
DROP INDEX `schools_zoneId_fkey` ON `schools`;

-- AlterTable
ALTER TABLE `schools` MODIFY `zoneId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `schools` ADD CONSTRAINT `schools_zoneId_fkey` FOREIGN KEY (`zoneId`) REFERENCES `zones`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
