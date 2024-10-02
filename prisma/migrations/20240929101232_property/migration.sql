/*
  Warnings:

  - You are about to drop the column `shareCount` on the `Property` table. All the data in the column will be lost.
  - Added the required column `description` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sharePrice` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Property" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "address" TEXT NOT NULL,
    "zipcode" INTEGER NOT NULL,
    "maxShareCount" INTEGER NOT NULL,
    "sharePrice" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "thumbnail" TEXT,
    "description" TEXT NOT NULL,
    CONSTRAINT "Property_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Property" ("address", "id", "maxShareCount", "thumbnail", "userId", "zipcode") SELECT "address", "id", "maxShareCount", "thumbnail", "userId", "zipcode" FROM "Property";
DROP TABLE "Property";
ALTER TABLE "new_Property" RENAME TO "Property";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
