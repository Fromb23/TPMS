/*
  Warnings:

  - You are about to drop the column `coordinator` on the `zones` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[coordinatorId]` on the table `zones` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `zones` DROP COLUMN `coordinator`,
    ADD COLUMN `coordinatorId` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `zones_coordinatorId_key` ON `zones`(`coordinatorId`);

-- AddForeignKey
ALTER TABLE `zones` ADD CONSTRAINT `zones_coordinatorId_fkey` FOREIGN KEY (`coordinatorId`) REFERENCES `lecturers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
