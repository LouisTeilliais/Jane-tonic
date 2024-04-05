/*
  Warnings:

  - You are about to drop the column `isFull` on the `sessions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "sessions" DROP COLUMN "isFull",
ADD COLUMN     "is_full" BOOLEAN NOT NULL DEFAULT false;
