/*
  Warnings:

  - You are about to drop the column `isCompleted` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `isReserved` on the `Session` table. All the data in the column will be lost.
  - Added the required column `number_user_max` to the `Session` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number_user_reserved` to the `Session` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Session" DROP COLUMN "isCompleted",
DROP COLUMN "isReserved",
ADD COLUMN     "isFull" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "number_user_max" INTEGER NOT NULL,
ADD COLUMN     "number_user_reserved" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "sessionId" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Session"("id") ON DELETE SET NULL ON UPDATE CASCADE;
