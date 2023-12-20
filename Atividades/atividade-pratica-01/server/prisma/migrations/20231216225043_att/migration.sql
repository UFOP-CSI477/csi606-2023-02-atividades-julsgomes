/*
  Warnings:

  - A unique constraint covering the columns `[rg]` on the table `pessoas` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "pessoas_rg_key" ON "pessoas"("rg");
