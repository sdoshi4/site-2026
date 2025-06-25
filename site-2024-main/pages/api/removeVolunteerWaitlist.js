import { PrismaClient } from "@prisma/client"
import { withAccelerate } from "@prisma/extension-accelerate"

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" })
  }

  const { slotId, volunteerId, volunteerEmail, volunteerName } = req.body

  console.log("removeVolunteer API called")

  try {
    const slot = await prisma.slot.findUnique({
      where: { id: slotId },
      include: { volunteers: true, waitList: true },
    })

    if (!slot) {
      return res.status(404).json({ message: "Slot not found" })
    }

    await prisma.slot.update({
      where: { id: slotId },
      data: {
        waitList: {
          disconnect: { clerkId: volunteerId },
        },
      },
    })

    // const newslot = await prisma.slot.findUnique({
    //   where: { id: slotId },
    //   include: { volunteers: true, waitList: true },
    // })

    // console.log("got new slot")

    // if (
    //   newslot.volunteers.length < newslot.maxVolunteers &&
    //   newslot.waitList.length > 0
    // ) {
    //   console.log("new slot has room")
    //   let volunteer = newslot.waitList[0]
    //   console.log(volunteer)
    //   await prisma.slot.update({
    //     where: { id: slotId },
    //     data: { volunteers: { connect: { clerkId: volunteer.clerkId } } },
    //   })
    //   console.log("Volunteer added to slot successfully")
    //   await prisma.slot.update({
    //     where: { id: slotId },
    //     data: { waitList: { disconnect: { clerkId: volunteer.clerkId } } },
    //   })
    //   console.log("Volunteer removed from waitlist successfully")
    // }

    res
      .status(200)
      .json({ message: "Volunteer removed from slot successfully" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Internal server error" })
  } finally {
    await prisma.$disconnect()
  }
}
