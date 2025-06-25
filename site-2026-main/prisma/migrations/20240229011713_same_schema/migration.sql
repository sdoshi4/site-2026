/*
  Warnings:

  - You are about to drop the `WaitListed` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_SlotToVolunteer` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterSequence
ALTER SEQUENCE "Volunteer_id_seq" MAXVALUE 9223372036854775807;

-- DropForeignKey
ALTER TABLE "WaitListed" DROP CONSTRAINT "WaitListed_slotId_fkey";

-- DropForeignKey
ALTER TABLE "_SlotToVolunteer" DROP CONSTRAINT "_SlotToVolunteer_A_fkey";

-- DropForeignKey
ALTER TABLE "_SlotToVolunteer" DROP CONSTRAINT "_SlotToVolunteer_B_fkey";

-- DropTable
DROP TABLE "WaitListed";

-- DropTable
DROP TABLE "_SlotToVolunteer";

-- CreateTable
CREATE TABLE "_WaitListedVolunteers" (
    "A" INT4 NOT NULL,
    "B" INT4 NOT NULL
);

-- CreateTable
CREATE TABLE "_SlotVolunteers" (
    "A" INT4 NOT NULL,
    "B" INT4 NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_WaitListedVolunteers_AB_unique" ON "_WaitListedVolunteers"("A", "B");

-- CreateIndex
CREATE INDEX "_WaitListedVolunteers_B_index" ON "_WaitListedVolunteers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_SlotVolunteers_AB_unique" ON "_SlotVolunteers"("A", "B");

-- CreateIndex
CREATE INDEX "_SlotVolunteers_B_index" ON "_SlotVolunteers"("B");

-- AddForeignKey
ALTER TABLE "_WaitListedVolunteers" ADD CONSTRAINT "_WaitListedVolunteers_A_fkey" FOREIGN KEY ("A") REFERENCES "Slot"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_WaitListedVolunteers" ADD CONSTRAINT "_WaitListedVolunteers_B_fkey" FOREIGN KEY ("B") REFERENCES "Volunteer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SlotVolunteers" ADD CONSTRAINT "_SlotVolunteers_A_fkey" FOREIGN KEY ("A") REFERENCES "Slot"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SlotVolunteers" ADD CONSTRAINT "_SlotVolunteers_B_fkey" FOREIGN KEY ("B") REFERENCES "Volunteer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
