import sgMail from "@sendgrid/mail"

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { to, from, templateId, dynamicTemplateData } = req.body

    const msg = {
      to,
      from,
      templateId,
      dynamicTemplateData,
    }

    try {
      await sgMail.send(msg)
      res.status(200).json({ message: "Email sent successfully" })
    } catch (error) {
      console.error(error)

      if (error.response) {
        console.error(error.response.body)
      }
      res.status(500).json({ error: "Failed to send email" })
    }
  } else {
    res.setHeader("Allow", ["POST"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
