/*
  Warnings:

  - The `roles` column on the `invitations` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "invitations" DROP COLUMN "roles",
ADD COLUMN     "roles" "MembershipRole"[];
