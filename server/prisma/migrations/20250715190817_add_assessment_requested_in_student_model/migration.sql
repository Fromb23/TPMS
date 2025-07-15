/*
  Warnings:

  - You are about to drop the column `assessmentInProgress` on the `students` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `students` DROP COLUMN `assessmentInProgress`,
    ADD COLUMN `assessmentRequested` BOOLEAN NOT NULL DEFAULT false;
