-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Vehicle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "img" TEXT NOT NULL DEFAULT 'https://pics.clipartpng.com/midle/Car_PNG_Clip_Art-1339.png'
);
INSERT INTO "new_Vehicle" ("createdAt", "id", "model", "name", "updatedAt") SELECT "createdAt", "id", "model", "name", "updatedAt" FROM "Vehicle";
DROP TABLE "Vehicle";
ALTER TABLE "new_Vehicle" RENAME TO "Vehicle";
CREATE INDEX "Vehicle_name_idx" ON "Vehicle"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
