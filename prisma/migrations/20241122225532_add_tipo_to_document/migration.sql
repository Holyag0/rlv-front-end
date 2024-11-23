/*
  Warnings:

  - Added the required column `tipo` to the `Document` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Document" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "emitente" TEXT NOT NULL,
    "valor_tributo" REAL NOT NULL,
    "valor_liquido" REAL NOT NULL,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL
);
INSERT INTO "new_Document" ("createAt", "emitente", "id", "nome", "updateAt", "valor_liquido", "valor_tributo") SELECT "createAt", "emitente", "id", "nome", "updateAt", "valor_liquido", "valor_tributo" FROM "Document";
DROP TABLE "Document";
ALTER TABLE "new_Document" RENAME TO "Document";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
