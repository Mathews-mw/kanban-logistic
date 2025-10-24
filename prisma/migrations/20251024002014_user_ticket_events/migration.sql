-- DropForeignKey
ALTER TABLE "kanban_logistic"."ticket_documents" DROP CONSTRAINT "ticket_documents_ticket_id_fkey";

-- DropForeignKey
ALTER TABLE "kanban_logistic"."ticket_event_logs" DROP CONSTRAINT "ticket_event_logs_ticket_id_fkey";

-- AddForeignKey
ALTER TABLE "ticket_documents" ADD CONSTRAINT "ticket_documents_ticket_id_fkey" FOREIGN KEY ("ticket_id") REFERENCES "tickets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket_event_logs" ADD CONSTRAINT "ticket_event_logs_ticket_id_fkey" FOREIGN KEY ("ticket_id") REFERENCES "tickets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket_event_logs" ADD CONSTRAINT "ticket_event_logs_actor_id_fkey" FOREIGN KEY ("actor_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
