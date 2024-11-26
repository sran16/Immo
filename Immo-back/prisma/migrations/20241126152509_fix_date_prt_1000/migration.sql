/*
  Warnings:

  - Made the column `date_publication` on table `annonce` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `annonce` MODIFY `date_publication` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
