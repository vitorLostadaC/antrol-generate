/*
  Warnings:

  - You are about to drop the column `colorName` on the `GenerationParams` table. All the data in the column will be lost.
  - Added the required column `primaryColor` to the `GenerationParams` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GenerationParams" DROP COLUMN "colorName",
ADD COLUMN     "primaryColor" TEXT NOT NULL,
ADD COLUMN     "secondaryColor" TEXT;
