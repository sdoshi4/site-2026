const { PrismaClient } = require("@prisma/client")
import { withAccelerate } from "@prisma/extension-accelerate"

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const clerkId = req.body.clerkId
  try {
    const slots = await prisma.slot.findMany({
      include: { volunteers: true, waitList: true },
    })
    res.status(200).json({ slots })
  } catch (error) {
      console.log(error)
    console.error("Error retrieving slots:", error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}
