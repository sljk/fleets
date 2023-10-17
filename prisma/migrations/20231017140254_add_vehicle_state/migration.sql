/*
  Warnings:

  - Added the required column `completedJobs` to the `VehicleOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currentJob` to the `VehicleOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jobCount` to the `VehicleOrder` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_VehicleOrder" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "variant" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "vehicleId" INTEGER,
    "jobCount" INTEGER NOT NULL,
    "completedJobs" INTEGER NOT NULL,
    "currentJob" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "VehicleOrder_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_VehicleOrder" ("createdAt", "id", "status", "text", "title", "updatedAt", "variant", "vehicleId") SELECT "createdAt", "id", "status", "text", "title", "updatedAt", "variant", "vehicleId" FROM "VehicleOrder";
DROP TABLE "VehicleOrder";
ALTER TABLE "new_VehicleOrder" RENAME TO "VehicleOrder";
CREATE INDEX "VehicleOrder_vehicleId_idx" ON "VehicleOrder"("vehicleId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
