import React, { useState, useEffect } from "react"
import { useUser } from "@clerk/nextjs"

const SlotPicker = () => {
  const [slots, setSlots] = useState([])
  const [slotsLoaded, setSlotsLoaded] = useState(false)
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  })

  const { isLoaded, user } = useUser()

  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const response = await fetch("/api/getSlots")

        const data = await response.json()
        setSlots(data.slots)
        setSlotsLoaded(true)
      } catch (error) {
        console.error("Error fetching slots:", error)
      }
    }

    fetchSlots()
    const interval = setInterval(() => fetchSlots(), 5000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  const sortedSlots = React.useMemo(() => {
    let sortableItems = [...slots]
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1
        }
        return 0
      })
    }
    return sortableItems
  }, [slots, sortConfig])

  const requestSort = (key) => {
    let direction = "ascending"
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending"
    }
    setSortConfig({ key, direction })
  }

  const getSortDirectionArrow = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending" ? " ▲" : " ▼"
    }
    return ""
  }

  function convertISOToReadableDate(isoString) {
    const date = new Date(isoString)
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
      hour: "numeric",
      minute: "numeric",
    })
  }
  function convertISOToReadableTime(isoString) {
    const date = new Date(isoString)
    return date.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true, // Set to true if you prefer 12-hour format (AM/PM)
    })
  }

  const handleSlotClick = async (
    slotId,
    userId,
    name,
    email,
    eventName,
    startTime,
    eventLocation
  ) => {
    try {
      const response = await fetch("/api/addVolunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slotId: slotId,
          volunteerId: userId,
          volunteerName: name,
          volunteerEmail: email,
        }),
      })

      const sendEmailRes = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: email,
          from: "eoh-tech@ec.illinois.edu",
          templateId: "d-98b66934bc6b4a90ae46a8e5c997a536",
          dynamicTemplateData: {
            event_name: eventName,
            event_location: eventLocation,
            event_start: convertISOToReadableDate(startTime),
          },
        }),
      })

      // Handle the response as needed
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  const handleWaitlistClick = async (slotId, userId, name, email) => {
    try {
      const response = await fetch("/api/addVolunteerWaitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slotId: slotId,
          volunteerId: userId,
          volunteerName: name,
          volunteerEmail: email,
        }),
      })
      // Handle the response as needed
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  const handleRemoveWaitlist = async (slotId, userId, name, email) => {
    try {
      const response = await fetch("/api/removeVolunteerWaitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slotId: slotId,
          volunteerId: userId,
          volunteerName: name,
          volunteerEmail: email,
        }),
      })
      // Handle the response as needed
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  const handleRemove = async (slotId, userId, name, email, eventName) => {
    try {
      const response = await fetch("/api/removeVolunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slotId: slotId,
          volunteerId: userId,
          volunteerName: name,
          volunteerEmail: email,
        }),
      })

      const sendEmailRes = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: email,
          from: "eoh-tech@ec.illinois.edu",
          templateId: "d-9758df3f8da8489f80cbe568a7a6f6e3",
          dynamicTemplateData: {
            event_name: eventName,
          },
        }),
      })

      // Handle the response as needed
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {isLoaded && slots && slotsLoaded && user ? (
        <div>
          <table className="min-w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th
                  className="px-4 py-2 hover:cursor-pointer whitespace-nowrap"
                  onClick={() => requestSort("description")}
                >
                  Description{getSortDirectionArrow("description")}
                </th>
                <th
                  className="px-4 py-2 hover:cursor-pointer  whitespace-nowrap"
                  onClick={() => requestSort("location")}
                >
                  Location{getSortDirectionArrow("location")}
                </th>
                <th
                  className="px-4 py-2 hover:cursor-pointer  whitespace-nowrap"
                  onClick={() => requestSort("time")}
                >
                  Time{getSortDirectionArrow("time")}
                </th>
                <th
                  className="px-4 py-2 hover:cursor-pointer  whitespace-nowrap"
                  onClick={() => requestSort("volunteers")}
                >
                  Volunteers{getSortDirectionArrow("volunteers")}
                </th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedSlots.map((slot) => (
                <tr className="border-b" key={slot.id}>
                  <td className="border px-4 py-2">{slot.description}</td>
                  <td className="border px-4 py-2">{slot.location}</td>
                  <td className="border px-4 py-2">
                    {convertISOToReadableDate(slot.time)} to{" "}
                    {convertISOToReadableTime(slot.endTime)}
                  </td>
                  <td className="border px-4 py-2">
                    {slot.volunteers.length} / {slot.maxParticipants}
                  </td>
                  <td className="border px-4 py-2">
                    {slot.volunteers.find((v) => v.clerkId === user.id) ? (
                      <button
                        onClick={() =>
                          handleRemove(
                            slot.id,
                            user.id,
                            user.fullName,
                            user.primaryEmailAddress.emailAddress,
                            slot.description
                          )
                        }
                        className="bg-red-100 hover:bg-red-500 rounded-md px-4 py-2 m-1 cursor-pointer"
                      >
                        Unregister
                      </button>
                    ) : slot.volunteers.length < slot.maxParticipants &&
                      !slot.waitList.find((v) => v.clerkId === user.id) ? (
                      <button
                        onClick={() =>
                          handleSlotClick(
                            slot.id,
                            user.id,
                            user.fullName,
                            user.primaryEmailAddress.emailAddress,
                            slot.description,
                            slot.time,
                            slot.location
                          )
                        }
                        className="bg-green-100 hover:bg-green-500 rounded-md px-4 py-2 m-1 cursor-pointer"
                      >
                        Register
                      </button>
                    ) : slot.volunteers.length >= slot.maxParticipants &&
                      slot.waitList.length < slot.waitListSize &&
                      !slot.waitList.find((v) => v.clerkId === user.id) ? (
                      <>
                        <div>
                          Waitlist: {slot.waitList.length} / {slot.waitListSize}
                        </div>
                        <button
                          onClick={() =>
                            handleWaitlistClick(
                              slot.id,
                              user.id,
                              user.fullName,
                              user.primaryEmailAddress.emailAddress
                            )
                          }
                          className="bg-yellow-100 hover:bg-yellow-500 rounded-md px-4 py-2 m-1 cursor-pointer"
                        >
                          Join Waitlist
                        </button>
                      </>
                    ) : !slot.waitList.find((v) => v.clerkId === user.id) ? (
                      <></>
                    ) : (
                      <div>
                        Waitlist: {slot.waitList.length} / {slot.waitListSize}
                        <button
                          onClick={() =>
                            handleRemoveWaitlist(
                              slot.id,
                              user.id,
                              user.fullName,
                              user.primaryEmailAddress.emailAddress
                            )
                          }
                          className="bg-red-100 hover:bg-red-500 rounded-md px-4 py-2 m-1 cursor-pointer"
                        >
                          Leave Waitlist
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex w-full justify-center items-center flex-col">
          <p className="font-bold text-xl m-4">
            Loading...
          </p>
          <img
            src="/assets/logo/gear1.gif"
            alt="loading"
            className="w-20"
          />
        </div>
      )}
    </div>
  )
}

export default SlotPicker
