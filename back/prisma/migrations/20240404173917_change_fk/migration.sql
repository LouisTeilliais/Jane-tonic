/*
  Warnings:

  - You are about to drop the column `session_type_id` on the `sessions` table. All the data in the column will be lost.
  - Added the required column `sessionTypeId` to the `sessions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "sessions" DROP CONSTRAINT "sessions_session_type_id_fkey";

-- AlterTable
ALTER TABLE "sessions" DROP COLUMN "session_type_id",
ADD COLUMN     "sessionTypeId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_sessionTypeId_fkey" FOREIGN KEY ("sessionTypeId") REFERENCES "session_type"("sessionTypeId") ON DELETE RESTRICT ON UPDATE CASCADE;
