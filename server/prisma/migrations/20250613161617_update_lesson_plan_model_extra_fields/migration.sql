/*
  Warnings:

  - You are about to drop the column `description` on the `lesson_plans` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `lesson_plans` table. All the data in the column will be lost.
  - Added the required column `endTime` to the `lesson_plans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lessonTitle` to the `lesson_plans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `lesson_plans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subject` to the `lesson_plans` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `lesson_plans` DROP COLUMN `description`,
    DROP COLUMN `title`,
    ADD COLUMN `comments` VARCHAR(191) NULL,
    ADD COLUMN `endTime` VARCHAR(191) NOT NULL,
    ADD COLUMN `lessonTitle` VARCHAR(191) NOT NULL,
    ADD COLUMN `startTime` VARCHAR(191) NOT NULL,
    ADD COLUMN `subject` VARCHAR(191) NOT NULL;
