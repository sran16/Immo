-- CreateTable
CREATE TABLE `Agent` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `badge_number` INTEGER NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Agent_badge_number_key`(`badge_number`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Annonce` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titre` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `prix` INTEGER NOT NULL,
    `date_publication` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `type_bienId` INTEGER NOT NULL,
    `nombre_pieces` INTEGER NOT NULL,
    `nombre_chambres` INTEGER NOT NULL,
    `nombre_salles_bain` INTEGER NOT NULL,
    `surface` INTEGER NOT NULL,
    `meuble` VARCHAR(191) NOT NULL,
    `villeId` INTEGER NOT NULL,
    `nom_vendeur` VARCHAR(191) NOT NULL,
    `img_bien` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Equipement` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TypeBien` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ville` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_AnnonceToEquipement` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_AnnonceToEquipement_AB_unique`(`A`, `B`),
    INDEX `_AnnonceToEquipement_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Annonce` ADD CONSTRAINT `Annonce_villeId_fkey` FOREIGN KEY (`villeId`) REFERENCES `Ville`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Annonce` ADD CONSTRAINT `Annonce_type_bienId_fkey` FOREIGN KEY (`type_bienId`) REFERENCES `TypeBien`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AnnonceToEquipement` ADD CONSTRAINT `_AnnonceToEquipement_A_fkey` FOREIGN KEY (`A`) REFERENCES `Annonce`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_AnnonceToEquipement` ADD CONSTRAINT `_AnnonceToEquipement_B_fkey` FOREIGN KEY (`B`) REFERENCES `Equipement`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
