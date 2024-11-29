-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 29, 2024 at 10:37 PM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `emmo`
--

-- --------------------------------------------------------

--
-- Table structure for table `agent`
--

CREATE TABLE `agent` (
  `id` int(11) NOT NULL,
  `badge_number` int(11) NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `agent`
--

INSERT INTO `agent` (`id`, `badge_number`, `password`) VALUES
(1, 123456, '$2b$10$7ks6Ugy7zkPsESliLNlmDuDhqvgpmjAkfTertWDdmr16BvftBTGlK');

-- --------------------------------------------------------

--
-- Table structure for table `annonce`
--

CREATE TABLE `annonce` (
  `id` int(11) NOT NULL,
  `titre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prix` int(11) NOT NULL,
  `date_publication` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `type_bienId` int(11) NOT NULL,
  `nombre_pieces` int(11) NOT NULL,
  `nombre_chambres` int(11) NOT NULL,
  `nombre_salles_bain` int(11) NOT NULL,
  `surface` int(11) NOT NULL,
  `meuble` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `villeId` int(11) NOT NULL,
  `nom_vendeur` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `img_bien` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lat` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lon` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `annonce`
--

INSERT INTO `annonce` (`id`, `titre`, `description`, `prix`, `date_publication`, `type_bienId`, `nombre_pieces`, `nombre_chambres`, `nombre_salles_bain`, `surface`, `meuble`, `villeId`, `nom_vendeur`, `img_bien`, `lat`, `lon`) VALUES
(2, 'Appartement de Luxe avec Vue sur la Tour Eiffel', 'Cet appartement moderne et élégant offre une vue imprenable sur la Tour Eiffel. Situé au dernier étage d\'un immeuble historique, il bénéficie de toutes les commodités de luxe, y compris une terrasse privée et des finitions haut de gamme.', 12000000, '2024-11-29 12:54:02.279', 1, 5, 3, 3, 250, 'Meublé', 1, 'Marie Dupont', 'https://plus.unsplash.com/premium_photo-1683120656283-64c0815111f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '48.8584', '2.2945'),
(3, 'Villa de Luxe à Nice', 'Cet appartement moderne et élégant offre une vue à couper le souffle sur la majestueuse Tour Eiffel. Niché au dernier étage d’un immeuble historique, il allie le charme classique parisien au luxe contemporain. La propriété dispose d’une spacieuse terrasse privée, idéale pour recevoir ou profiter de soirées paisibles, tandis que l’intérieur présente des finitions haut de gamme, telles que des parquets en bois noble, des plans de travail en marbre et des équipements dernier cri. Chaque pièce a été conçue avec soin pour maximiser confort et élégance, créant une atmosphère raffinée et apaisante. Situé au cœur de la ville, cet appartement bénéficie d’un accès privilégié à une gastronomie raffinée, des boutiques de renommée mondiale et des monuments emblématiques, faisant de cette résidence un véritable bijou pour ceux qui recherchent l’excellence du mode de vie parisien.', 8500000, '2024-11-29 12:54:02.279', 2, 7, 5, 4, 400, 'Non meublé', 2, 'Pierre Lefèvre', 'https://plus.unsplash.com/premium_photo-1682377521697-bc598b52b08a?q=80&w=2115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '43.7102', '7.2619'),
(4, 'test ', 'test test ', 400, '2024-11-29 13:10:19.471', 1, 4, 5, 4, 410, 'oui ', 1, 'test luca ', 'default-image-path.jpg', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `equipement`
--

CREATE TABLE `equipement` (
  `id` int(11) NOT NULL,
  `nom` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `typebien`
--

CREATE TABLE `typebien` (
  `id` int(11) NOT NULL,
  `nom` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `typebien`
--

INSERT INTO `typebien` (`id`, `nom`) VALUES
(1, 'Appartement'),
(2, 'villa');

-- --------------------------------------------------------

--
-- Table structure for table `ville`
--

CREATE TABLE `ville` (
  `id` int(11) NOT NULL,
  `nom` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ville`
--

INSERT INTO `ville` (`id`, `nom`) VALUES
(1, 'Paris'),
(2, 'Nice');

-- --------------------------------------------------------

--
-- Table structure for table `_annoncetoequipement`
--

CREATE TABLE `_annoncetoequipement` (
  `A` int(11) NOT NULL,
  `B` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('1e1ffdc7-1150-42e7-9a46-d9c74561b7a1', '06c9e267e391bac52f4b4fb7246f74b102ceae2470679883f41b5b2947e370da', '2024-11-29 12:41:59.542', '20241129124159_add_lon_lat', NULL, NULL, '2024-11-29 12:41:59.465', 1),
('242f394b-1fd1-4ebd-a652-16a93452e404', '35a8c26f297c7b541b97d45b7d9727231963f00836faf6778e23b75a03dcb9f2', '2024-11-29 12:41:50.960', '20241126150505_test_fix_date', NULL, NULL, '2024-11-29 12:41:50.891', 1),
('79d97f5f-2c01-41ba-85b6-dea51e5cdaa4', '985d4c2c9d1854e3cb9d9e1d599519bd69fe7c5b8eab5fddca00045a024d717b', '2024-11-29 12:41:50.867', '20241126110146_emmo_bdd', NULL, NULL, '2024-11-29 12:41:50.348', 1),
('8e79e206-becd-4456-a5c1-334dbcb57a30', 'a41354fd0b8f8656cef2d7a6b5621f69127be89287f5de91d2812cc37adc4ec5', '2024-11-29 12:41:50.888', '20241126150343_fix_date', NULL, NULL, '2024-11-29 12:41:50.870', 1),
('9c683ce4-8017-41ef-8fc8-b64a995ea237', '7705346e634371cc3ae0e006acb5ac235a2804aa94e55a645a25c8fe72c9b3b1', '2024-11-29 12:41:51.034', '20241126152509_fix_date_prt_1000', NULL, NULL, '2024-11-29 12:41:50.963', 1),
('fae7f4c6-ccb6-4d88-9f02-1ad91d38eba6', '1622d99dcbccda487373d9c969ee7ba263d8cf34555f76d3dd0c890038ca7c3f', '2024-11-29 12:41:51.106', '20241128185917_add_optional', NULL, NULL, '2024-11-29 12:41:51.036', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `agent`
--
ALTER TABLE `agent`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Agent_badge_number_key` (`badge_number`);

--
-- Indexes for table `annonce`
--
ALTER TABLE `annonce`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Annonce_villeId_fkey` (`villeId`),
  ADD KEY `Annonce_type_bienId_fkey` (`type_bienId`);

--
-- Indexes for table `equipement`
--
ALTER TABLE `equipement`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `typebien`
--
ALTER TABLE `typebien`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ville`
--
ALTER TABLE `ville`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `_annoncetoequipement`
--
ALTER TABLE `_annoncetoequipement`
  ADD UNIQUE KEY `_AnnonceToEquipement_AB_unique` (`A`,`B`),
  ADD KEY `_AnnonceToEquipement_B_index` (`B`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `agent`
--
ALTER TABLE `agent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `annonce`
--
ALTER TABLE `annonce`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `equipement`
--
ALTER TABLE `equipement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `typebien`
--
ALTER TABLE `typebien`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `ville`
--
ALTER TABLE `ville`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `annonce`
--
ALTER TABLE `annonce`
  ADD CONSTRAINT `Annonce_type_bienId_fkey` FOREIGN KEY (`type_bienId`) REFERENCES `typebien` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `Annonce_villeId_fkey` FOREIGN KEY (`villeId`) REFERENCES `ville` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `_annoncetoequipement`
--
ALTER TABLE `_annoncetoequipement`
  ADD CONSTRAINT `_AnnonceToEquipement_A_fkey` FOREIGN KEY (`A`) REFERENCES `annonce` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `_AnnonceToEquipement_B_fkey` FOREIGN KEY (`B`) REFERENCES `equipement` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
