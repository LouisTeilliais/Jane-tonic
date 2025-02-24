/*
  Warnings:

  - You are about to drop the column `sessionId` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_sessionId_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "sessionId",
ADD COLUMN     "session_id" INTEGER;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "sessions"("sessionId") ON DELETE SET NULL ON UPDATE CASCADE;
