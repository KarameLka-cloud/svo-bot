-- CreateTable
CREATE TABLE `menu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `options` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `menu_options_key`(`options`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
