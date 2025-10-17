/*
  Warnings:

  - You are about to drop the column `weighing_at` on the `tickets` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "tickets" DROP COLUMN "weighing_at",
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "weighed_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "TicketSequence" (
    "id" TEXT NOT NULL,
    "yearMonth" TEXT NOT NULL,
    "counter" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TicketSequence_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TicketSequence_yearMonth_key" ON "TicketSequence"("yearMonth");

-- CreateIndex
CREATE INDEX "tickets_status_idx" ON "tickets"("status");
