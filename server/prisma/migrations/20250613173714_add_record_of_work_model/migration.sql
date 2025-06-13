-- CreateTable
CREATE TABLE `RecordOfWork` (
    `id` VARCHAR(191) NOT NULL,
    `studentId` VARCHAR(191) NOT NULL,
    `school` VARCHAR(191) NOT NULL,
    `learningArea` VARCHAR(191) NOT NULL,
    `subject` VARCHAR(191) NOT NULL,
    `teacher` VARCHAR(191) NOT NULL,
    `records` JSON NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RecordOfWork` ADD CONSTRAINT `RecordOfWork_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `students`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
