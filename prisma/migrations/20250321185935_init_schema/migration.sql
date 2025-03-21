/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Refresh_tokens` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Refresh_tokens_id_key" ON "Refresh_tokens"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
