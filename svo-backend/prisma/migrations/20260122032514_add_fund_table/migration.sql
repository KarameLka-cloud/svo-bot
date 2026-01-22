-- CreateTable
CREATE TABLE `fund` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_button` VARCHAR(191) NOT NULL,
    `message` LONGTEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
