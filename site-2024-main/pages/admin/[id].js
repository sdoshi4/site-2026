// pages/admin/edit/[id].js

import { useRouter } from "next/router"
import { useState, useEffect } from "react"

const EditSlotPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [slot, setSlot] = useState(null)
  const [volunteer, setVolunteer] = useState(null)

  useEffect(() => {
    // Fetch the slot data based on the ID
    const fetchSlot = async () => {
      try {
        const response = await fetch(`/api/slots/${id}`)
        const data = await response.json()
        setSlot(data.slot)
        const volunteerResponse = await fetch(
          `/api/getEventVolunteerEmail/${id}`
        )
        const volunteerData = await volunteerResponse.json()
        setVolunteer(volunteerData.emails)
      } catch (error) {
        console.error(error)
      }
    }

    if (id) {
      fetchSlot()
    }
  }, [id])

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    // Update the slot data
    try {
      const response = await fetch(`/api/updateSlot`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: slot.id,
          description: slot.description,
          time: slot.time,
          endTime: slot.endTime,
          location: slot.location,
          maxParticipants: Number(slot.maxParticipants),
          waitListSize: Number(slot.waitListSize),
          volunteers: slot.volunteers,
        }),
      })
      if (response.ok) {
        // Redirect to the slot details page
        router.push(`/admin/${id}`)
      } else {
        console.error("Failed to update slot")
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setSlot((prevSlot) => ({
      ...prevSlot,
      [name]: value,
    }))
  }

  const copyTextToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      alert("Text copied to clipboard")
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  if (!slot) {
    return <div>Loading...</div>
  }

  return (
    <div className="mt-52 border-2">
      <h1>Edit Slot</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={slot.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <input
            type="text"
            id="time"
            name="time"
            value={slot.time}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="endTime">End Time:</label>
          <input
            type="text"
            id="endTime"
            name="endTime"
            value={slot.endTime}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={slot.location}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="maxParticipants">Max Participants:</label>
          <input
            type="number"
            id="maxParticipants"
            name="maxParticipants"
            value={slot.maxParticipants}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="waitListSize">Wait List Size:</label>
          <input
            type="number"
            id="waitListSize"
            name="waitListSize"
            value={slot.waitListSize}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
      {volunteer && (
        <div>
          <h2 className="font-bold">Emails</h2>
          <button onClick={() => copyTextToClipboard(volunteer.join(", "))}>
            Copy Emails
          </button>
          {volunteer.map((volunteer) => (
            <div key={volunteer.id}>
              <p>{volunteer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default EditSlotPage
