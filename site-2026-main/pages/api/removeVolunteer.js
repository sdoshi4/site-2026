import { PrismaClient } from "@prisma/client"
import { withAccelerate } from "@prisma/extension-accelerate"
import sgMail from "@sendgrid/mail"

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const prisma = new PrismaClient()

const convertISOToReadableDate = (isoDate) => {
    const date = new Date(isoDate)
    return date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
        hour: "numeric",
        minute: "numeric",
    })
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" })
  }

  const { slotId, volunteerId, volunteerEmail, volunteerName } = req.body

  console.log("removeVolunteer API called")

  try {
    const slot = await prisma.slot.findUnique({
      where: { id: slotId },
      include: { volunteers: true },
      include: { waitList: true },
    })

    if (!slot) {
      return res.status(404).json({ message: "Slot not found" })
    }

    await prisma.slot.update({
      where: { id: slotId },
      data: {
        volunteers: {
          disconnect: { clerkId: volunteerId },
        },
      },
    })
    if (slot.waitListSize > 0) {
      const waitingUser = slot.waitList[0]
      await prisma.slot.update({
        where: { id: slotId },
        data: {
          volunteers: {
            connect: { clerkId: waitingUser.clerkId },
          },
        },
      })
      await prisma.slot.update({
        where: { id: slotId },
        data: {
          waitList: {
            disconnect: { clerkId: waitingUser.clerkId },
          },
        },
      })

      const msg = {
        to: waitingUser.email,
        from: "eoh-tech@ec.illinois.edu",
        templateId: "d-5c406c25a5284c0b88e0798177f3df02",
        dynamicTemplateData: {
          event_name: slot.description,
          event_start: convertISOToReadableDate(slot.time),
          event_location: slot.location,
        },
      }

      try {
        await sgMail.send(msg)
      } catch (error) {
        console.error(error)
        if (error.response) {
          console.error(error.response.body)
        }
      }
    }

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
