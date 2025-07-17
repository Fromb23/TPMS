/*
  Warnings:

  - Added the required column `constituency` to the `schools` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `schools` ADD COLUMN `constituency` VARCHAR(191) NOT NULL;
