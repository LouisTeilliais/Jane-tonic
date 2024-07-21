-- DropForeignKey
ALTER TABLE "sessions" DROP CONSTRAINT "sessions_sessionId_fkey";

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_sessionTypeId_fkey" FOREIGN KEY ("sessionTypeId") REFERENCES "session_type"("sessionTypeId") ON DELETE RESTRICT ON UPDATE CASCADE;
