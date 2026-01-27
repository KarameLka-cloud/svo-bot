-- CreateTable
CREATE TABLE `want_relations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,
    `name_button` VARCHAR(191) NOT NULL,
    `message` LONGTEXT NULL,
    `url` LONGTEXT NULL,
    `want_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `want_relations` ADD CONSTRAINT `want_relations_want_id_fkey` FOREIGN KEY (`want_id`) REFERENCES `want`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
