import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req, res) {
  try {
    const slots = await prisma.slot.findMany({
      include: {
        volunteers: true,
      },
    })

    if (!slots) {
      return res.status(404).json({ message: "Slot not found" })
    }

    const emails = slots.flatMap((slot) =>
      slot.volunteers.map((volunteer) => volunteer.email)
    )

    res.status(200).json({ emails })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Internal server error" })
  } finally {
    await prisma.$disconnect()
  }
}
