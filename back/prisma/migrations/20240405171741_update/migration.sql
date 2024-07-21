/*
  Warnings:

  - You are about to drop the `admins` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `session_types` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "sessions" DROP CONSTRAINT "sessions_session_type_id_fkey";

-- DropTable
DROP TABLE "admins";

-- DropTable
DROP TABLE "session_types";

-- CreateTable
CREATE TABLE "session_type" (
    "sessionTypeId" SERIAL NOT NULL,
    "session_type" TEXT NOT NULL,

    CONSTRAINT "session_type_pkey" PRIMARY KEY ("sessionTypeId")
);

-- CreateTable
CREATE TABLE "admin" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'ADMIN',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_session_type_id_fkey" FOREIGN KEY ("session_type_id") REFERENCES "session_type"("sessionTypeId") ON DELETE RESTRICT ON UPDATE CASCADE;
