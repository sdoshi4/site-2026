import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const { id } = req.query

  try {
    const slot = await prisma.slot.findUnique({
      where: { id: Number(id) },
      include: {
        volunteers: true,
      },
    })

    if (!slot) {
      return res.status(404).json({ message: "Slot not found" })
    }

    const emails = slot.volunteers.map((volunteer) => volunteer.email)

    res.status(200).json({ emails })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Internal server error" })
  } finally {
    await prisma.$disconnect()
  }
}
