import { PrismaClient } from "@prisma/client"
import { withAccelerate } from "@prisma/extension-accelerate"

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" })
  }

  const { slotId, volunteerId, volunteerEmail, volunteerName } = req.body

  console.log("addVolunteerWaitlist API called")

  try {
    const slot = await prisma.slot.findUnique({
      where: { id: slotId },
      include: { volunteers: true, waitList: true },
    })

    if (slot.waitList.length >= slot.waitListSize) {
      return res.status(400).json({ message: "Waitlist is full" })
    }

    let volunteer = await prisma.volunteer.findUnique({
      where: { clerkId: volunteerId },
    })

    if (!slot) {
      return res.status(404).json({ message: "Slot not found" })
    }

    if (slot.volunteers.find((v) => v.clerkId === volunteerId)) {
      console.log("Volunteer already signed up")
      return res.status(400).json({ message: "Volunteer already signed up" })
    }

    if (slot.waitList.find((v) => v.clerkId === volunteerId)) {
      return res.status(400).json({ message: "Volunteer already on waitlist" })
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
      data: { waitList: { connect: { clerkId: volunteerId } } },
    })

    res
      .status(200)
      .json({ message: "Volunteer added to waitlist successfully" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Internal server error" })
  } finally {
    await prisma.$disconnect()
  }
}
