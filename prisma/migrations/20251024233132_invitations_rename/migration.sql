/*
  Warnings:

  - You are about to drop the `Invitation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "kanban_logistic"."Invitation" DROP CONSTRAINT "Invitation_company_id_fkey";

-- DropForeignKey
ALTER TABLE "kanban_logistic"."Invitation" DROP CONSTRAINT "Invitation_created_by_id_fkey";

-- DropTable
DROP TABLE "kanban_logistic"."Invitation";

-- CreateTable
CREATE TABLE "invitations" (
    "id" TEXT NOT NULL,
    "company_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "roles" "UserRole"[],
    "token_hash" TEXT NOT NULL,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "accepted_at" TIMESTAMP(3),
    "revoked_at" TIMESTAMP(3),
    "created_by_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "invitations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "invitations_company_id_idx" ON "invitations"("company_id");

-- CreateIndex
CREATE INDEX "invitations_email_idx" ON "invitations"("email");

-- AddForeignKey
ALTER TABLE "invitations" ADD CONSTRAINT "invitations_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invitations" ADD CONSTRAINT "invitations_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
