const { PrismaClient } = require("@prisma/client")
import { withAccelerate } from "@prisma/extension-accelerate"

export default async function createSlot(req, res) {
  const prisma = new PrismaClient()

  try {
    const {
      description,
      time,
      endTime,
      location,
      maxParticipants,
      waitListSize,
    } = req.body

    const slot = await prisma.slot.create({
      data: {
        description,
        time,
        endTime,
        location,
        maxParticipants,
        waitListSize,
      },
    })

    res.status(201).json(slot)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Failed to create slot" })
  } finally {
    await prisma.$disconnect()
  }
}
