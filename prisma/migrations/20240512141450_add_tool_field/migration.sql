/*
  Warnings:

  - Added the required column `tool` to the `Generation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Generation" ADD COLUMN     "tool" TEXT NOT NULL;
