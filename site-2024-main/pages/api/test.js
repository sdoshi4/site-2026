export default async function handler(req, res) {
  try {
    res.status(200).json({ hello: "world" })
  } catch (error) {
    console.error("Error retrieving slots:", error)
    throw error
  }
}
