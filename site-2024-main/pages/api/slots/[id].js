// pages/api/slots/[id].js
import { PrismaClient } from "@prisma/client"
import { withAccelerate } from "@prisma/extension-accelerate"

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const { id } = req.query
  try {
    // Find the slot with the given ID
    const slot = await prisma.slot.findUnique({
      where: { id: Number(id) },
      include: { volunteers: true },
    })

    if (!slot) {
      return res.status(404).json({ message: "Slot not found" })
    }

    return res.status(200).json({ slot })
  } catch (error) {
    console.error("Error retrieving slot:", error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}
