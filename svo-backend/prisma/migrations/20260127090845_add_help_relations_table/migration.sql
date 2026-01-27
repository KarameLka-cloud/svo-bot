-- CreateTable
CREATE TABLE `help_relations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,
    `name_button` VARCHAR(191) NOT NULL,
    `message` LONGTEXT NULL,
    `url` LONGTEXT NULL,
    `help_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `help_relations` ADD CONSTRAINT `help_relations_help_id_fkey` FOREIGN KEY (`help_id`) REFERENCES `help`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
