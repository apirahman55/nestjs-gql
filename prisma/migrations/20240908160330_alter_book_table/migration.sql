/*
  Warnings:

  - Added the required column `cover` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isbn` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `link` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publishedAt` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "cover" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "isbn" TEXT NOT NULL,
ADD COLUMN     "link" TEXT NOT NULL,
ADD COLUMN     "publishedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
