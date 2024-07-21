/*
  Warnings:

  - You are about to drop the `admin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `session_type` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "sessions" DROP CONSTRAINT "sessions_session_type_id_fkey";

-- DropTable
DROP TABLE "admin";

-- DropTable
DROP TABLE "session_type";

-- CreateTable
CREATE TABLE "session_types" (
    "sessionTypeId" SERIAL NOT NULL,
    "session_type" TEXT NOT NULL,

    CONSTRAINT "session_types_pkey" PRIMARY KEY ("sessionTypeId")
);

-- CreateTable
CREATE TABLE "admins" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'ADMIN',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "admins_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_session_type_id_fkey" FOREIGN KEY ("session_type_id") REFERENCES "session_types"("sessionTypeId") ON DELETE RESTRICT ON UPDATE CASCADE;
