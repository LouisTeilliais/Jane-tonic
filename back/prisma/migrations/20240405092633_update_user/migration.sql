-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_userId_fkey";

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "sessions"("sessionId") ON DELETE RESTRICT ON UPDATE CASCADE;
