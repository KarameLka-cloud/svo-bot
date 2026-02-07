-- CreateTable
CREATE TABLE `action` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,
    `name_button` VARCHAR(191) NOT NULL,
    `message` LONGTEXT NULL,
    `url` LONGTEXT NULL,
    `parent_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `screen` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(191) NOT NULL,
    `message` LONGTEXT NOT NULL,

    UNIQUE INDEX `screen_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `faq` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `question` LONGTEXT NOT NULL,
    `answer` LONGTEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `action` ADD CONSTRAINT `action_parent_id_fkey` FOREIGN KEY (`parent_id`) REFERENCES `action`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
