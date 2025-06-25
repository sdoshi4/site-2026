import { useState, useEffect } from "react"
import Content from "@/content"
import EventCard from "@/eventCard"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

export default function StartupShowcasePage() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/assets/data/events.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        const data = await res.json()
        console.log(data)
        setEvents(data.events)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <Content title="Prospective & Admitted Students">
      <div className="container mx-auto p-4">
        <p>
          Dear prospective or admitted student, Engineering Open House warmly
          welcomes you to the University of Illinois. In addition to all of our
          general events, you can find a list of events below specifically aimed
          towards helping you discover life as an engineering student here. We
          encourage you to take part in as many events as you can, and hope you
          have an enjoyable time at EOH.
        </p>
      </div>
      <div className="container mx-auto px-4 mt-4">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {events.map((event, index) => (
              <EventCard
                key={index}
                description={event.description}
                title={event.name}
                location={event.location}
                dateTime={event.times}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </Content>
  )
}
