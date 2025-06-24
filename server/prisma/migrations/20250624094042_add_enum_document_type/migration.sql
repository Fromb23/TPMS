/*
  Warnings:

  - You are about to alter the column `type` on the `documents` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.

*/
-- AlterTable
ALTER TABLE `documents` MODIFY `type` ENUM('TP_APPLICATION', 'REPORT', 'LESSON_PLAN', 'SUPERVISION_VISIT', 'FINAL_DOCUMENT') NOT NULL;
