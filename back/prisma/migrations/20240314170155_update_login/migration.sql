/*
  Warnings:

  - You are about to drop the column `login` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `surname` on the `user` table. All the data in the column will be lost.
  - Added the required column `email` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "login",
DROP COLUMN "name",
DROP COLUMN "surname",
ADD COLUMN     "email" TEXT NOT NULL;
