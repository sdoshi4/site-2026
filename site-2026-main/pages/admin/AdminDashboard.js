import React, { useState, useEffect } from "react"
import volunteer from "../volunteer/index"
import DateTimePicker from "react-datetime-picker"
import "react-datetime-picker/dist/DateTimePicker.css"
import "react-calendar/dist/Calendar.css"
import "react-clock/dist/Clock.css"

export default function AdminDashboard() {
  const [slots, setSlots] = useState([])
  const [description, setDescription] = useState("")
  const [time, setTime] = useState(new Date())
  const [endTime, setEndTime] = useState(new Date())
  const [location, setLocation] = useState("")
  const [maxPar, setMaxParticipants] = useState(0)
  const [waitSize, setWaitListSize] = useState(0)

  useEffect(() => {
    fetchSlots()
  }, [])

  const fetchSlots = async () => {
    const response = await fetch("/api/getSlots")
    const data = await response.json()
    setSlots(data.slots)
  }

  const createSlot = async () => {
    const startDateTime = new Date(time).toISOString()
    const endDateTime = new Date(endTime).toISOString()
    const maxParticipants = parseInt(maxPar)
    const waitListSize = parseInt(waitSize)

    const response = await fetch("/api/createSlot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description,
        time: startDateTime,
        endTime: endDateTime,
        location,
        maxParticipants: maxParticipants,
        waitListSize: waitListSize,
      }),
    })
    fetchSlots()
  }

  const deleteSlot = async (id) => {
    const response = await fetch("/api/deleteSlot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    })
    fetchSlots()
  }

  return (
    <div className="w-screen justify-center ">
      <h1 className="font-bold text-3xl text-center">Admin Dashboard</h1>

      <form className="max-w-sm mx-auto border-2 m-8 p-6" onSubmit={createSlot}>
        <h2 className="text-xl text-center">Create Slot</h2>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Volunteering event description..."
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>
        <div className="mb-5">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            location
          </label>
          <input
            type="text"
            id="base-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <label
            htmlFor="start-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Start Time
          </label>
          <DateTimePicker
            onChange={setTime}
            value={time}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <label
            htmlFor="end-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            End Time
          </label>
          <DateTimePicker
            onChange={setEndTime}
            value={endTime}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <label
          htmlFor="number-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Max volunteers:
        </label>
        <input
          type="number"
          id="number-input-volunteers"
          aria-describedby="helper-text-explanation"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="10"
          required
          onChange={(e) => setMaxParticipants(e.target.value)}
          value={maxPar}
        />
        <label
          htmlFor="number-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Wait list size:
        </label>
        <input
          type="number"
          id="number-input-wait-list"
          aria-describedby="helper-text-explanation"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="5"
          required
          onChange={(e) => setWaitListSize(e.target.value)}
          value={waitSize}
        />
        <button
          type="submit"
          className="bg-blue-400 hover:bg-blue-200 transition delay-50 duration-200 m-6 rounded-lg p-2"
        >
          Create
        </button>
      </form>

      <h2 className="text-xl text-center">Slots</h2>
      <div className="flex flex-wrap justify-center">
        {slots.map((slot) => (
          <div key={slot.id} className="m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="bg-white rounded shadow p-4">
              <p>Description: {slot.description}</p>
              <p>Time: {slot.time}</p>
              <p>End Time: {slot.endTime}</p>
              <p>Location: {slot.location}</p>
              <p>Max Participants: {slot.maxParticipants}</p>
              <p>Wait List Size: {slot.waitListSize}</p>
              <button
                className="hover:cursor-pointer"
                onClick={() => (window.location.href = `/admin/${slot.id}`)}
              >
                Edit
              </button>
              <br />
              <button onClick={() => deleteSlot(slot.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
