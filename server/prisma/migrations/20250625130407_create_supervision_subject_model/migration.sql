-- CreateTable
CREATE TABLE `supervision_subjects` (
    `id` VARCHAR(191) NOT NULL,
    `supervisionId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `startTime` DATETIME(3) NULL,
    `endTime` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `supervision_subjects` ADD CONSTRAINT `supervision_subjects_supervisionId_fkey` FOREIGN KEY (`supervisionId`) REFERENCES `supervision_schedules`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
