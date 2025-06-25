import { PrismaClient } from "@prisma/client"
import { withAccelerate } from "@prisma/extension-accelerate"

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" })
  }

  const { slotId, volunteerId, volunteerEmail, volunteerName } = req.body

  console.log("addVolunteer API called")

  try {
    const slot = await prisma.slot.findUnique({
      where: { id: slotId },
      include: { volunteers: true },
    })

    if (slot.volunteers.length >= slot.maxVolunteers) {
      return res.status(400).json({ message: "Slot is full" })
    }

    let volunteer = await prisma.volunteer.findUnique({
      where: { clerkId: volunteerId },
    })

    if (slot.volunteers.find((v) => v.clerkId === volunteerId)) {
      console.log("Volunteer already signed up")
      return res.status(400).json({ message: "Volunteer already signed up" })
    }

    if (!slot) {
      return res.status(404).json({ message: "Slot not found" })
    }

    if (!volunteer) {
      await prisma.volunteer.create({
        data: {
          clerkId: volunteerId,
          email: volunteerEmail,
          name: volunteerName,
        },
      })
    }

    await prisma.slot.update({
      where: { id: slotId },
      data: { volunteers: { connect: { clerkId: volunteerId } } },
    })

    res.status(200).json({ message: "Volunteer added to slot successfully" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Internal server error" })
  } finally {
    await prisma.$disconnect()
  }
}
