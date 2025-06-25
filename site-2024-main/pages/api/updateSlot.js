import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method !== "PUT") {
    return res.status(405).json({ message: "Method Not Allowed" })
  }

  const {
    id,
    description,
    time,
    endTime,
    location,
    maxParticipants,
    waitListSize,
    volunteers,
  } = req.body

  try {
    const updatedSlot = await prisma.slot.update({
      where: { id: Number(id) },
      data: {
        description,
        time,
        endTime,
        location,
        maxParticipants,
        waitListSize,
        volunteers: {
          set: volunteers, // Assuming volunteers is an array of Volunteer IDs
        },
      },
    })

    res.status(200).json(updatedSlot)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Internal Server Error" })
  } finally {
    await prisma.$disconnect()
  }
}
