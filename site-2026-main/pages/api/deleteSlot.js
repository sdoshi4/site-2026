const { PrismaClient } = require("@prisma/client")
import { withAccelerate } from "@prisma/extension-accelerate"

export default async function deleteSlot(req, res) {
  const prisma = new PrismaClient()

  try {
    const { id } = req.body

    const slot = await prisma.slot.delete({
      where: {
        id,
      },
    })

    res.status(201).json(slot)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Failed to delete slot" })
  } finally {
    await prisma.$disconnect()
  }
}
