-- AlterTable
ALTER TABLE `user` ADD COLUMN `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE';

-- CreateIndex
CREATE INDEX `User_status_idx` ON `User`(`status`);

-- CreateIndex
CREATE INDEX `User_create_at_idx` ON `User`(`create_at`);
