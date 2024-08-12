/*
  Warnings:

  - You are about to drop the column `link` on the `Banner` table. All the data in the column will be lost.
  - You are about to drop the column `timer` on the `Banner` table. All the data in the column will be lost.
  - Added the required column `endDateAndTime` to the `Banner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isExpired` to the `Banner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Banner` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Banner" DROP COLUMN "link",
DROP COLUMN "timer",
ADD COLUMN     "endDateAndTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "isExpired" BOOLEAN NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "title" TEXT NOT NULL;
