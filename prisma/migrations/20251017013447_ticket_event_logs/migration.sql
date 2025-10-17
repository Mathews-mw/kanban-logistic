/*
  Warnings:

  - You are about to drop the `TicketEventLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TicketSequence` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "kanban_logistic"."TicketEventLog" DROP CONSTRAINT "TicketEventLog_ticket_id_fkey";

-- DropTable
DROP TABLE "kanban_logistic"."TicketEventLog";

-- DropTable
DROP TABLE "kanban_logistic"."TicketSequence";

-- CreateTable
CREATE TABLE "ticket_event_logs" (
    "id" TEXT NOT NULL,
    "ticket_id" TEXT NOT NULL,
    "actor_id" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "from" TEXT,
    "to" TEXT,
    "meta" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ticket_event_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ticket_sequences" (
    "id" TEXT NOT NULL,
    "year_month" TEXT NOT NULL,
    "counter" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "ticket_sequences_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ticket_event_logs_ticket_id_idx" ON "ticket_event_logs"("ticket_id");

-- CreateIndex
CREATE UNIQUE INDEX "ticket_sequences_year_month_key" ON "ticket_sequences"("year_month");

-- AddForeignKey
ALTER TABLE "ticket_event_logs" ADD CONSTRAINT "ticket_event_logs_ticket_id_fkey" FOREIGN KEY ("ticket_id") REFERENCES "tickets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
