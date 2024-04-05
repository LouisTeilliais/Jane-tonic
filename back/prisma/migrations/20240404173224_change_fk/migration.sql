/*
  Warnings:

  - You are about to drop the column `sessionTypeId` on the `sessions` table. All the data in the column will be lost.
  - Added the required column `session_type_id` to the `sessions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "sessions" DROP CONSTRAINT "sessions_sessionTypeId_fkey";

-- AlterTable
ALTER TABLE "sessions" DROP COLUMN "sessionTypeId",
ADD COLUMN     "session_type_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_session_type_id_fkey" FOREIGN KEY ("session_type_id") REFERENCES "session_type"("sessionTypeId") ON DELETE RESTRICT ON UPDATE CASCADE;
