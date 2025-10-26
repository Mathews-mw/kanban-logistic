-- AlterEnum
ALTER TYPE "CompanyRole" ADD VALUE 'ADMIN';

-- CreateTable
CREATE TABLE "Invitation" (
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

    CONSTRAINT "Invitation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Invitation_company_id_idx" ON "Invitation"("company_id");

-- CreateIndex
CREATE INDEX "Invitation_email_idx" ON "Invitation"("email");

-- AddForeignKey
ALTER TABLE "Invitation" ADD CONSTRAINT "Invitation_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invitation" ADD CONSTRAINT "Invitation_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
