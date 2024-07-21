/*
  Warnings:

  - You are about to drop the column `type` on the `sessions` table. All the data in the column will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `sessionTypeId` to the `sessions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "sessions" DROP COLUMN "type",
ADD COLUMN     "sessionTypeId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "session_type" (
    "sessionTypeId" SERIAL NOT NULL,
    "session_type" TEXT NOT NULL,

    CONSTRAINT "session_type_pkey" PRIMARY KEY ("sessionTypeId")
);

-- CreateTable
CREATE TABLE "users" (
    "userId" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'CLIENT',
    "sessionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("userId")
);

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "session_type"("sessionTypeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_userId_fkey" FOREIGN KEY ("userId") REFERENCES "sessions"("sessionId") ON DELETE RESTRICT ON UPDATE CASCADE;
