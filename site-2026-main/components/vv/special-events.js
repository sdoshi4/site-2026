import { Icon } from "@iconify/react"
import { useState } from "react"
import useSWR from "swr"
import { useQueryParam, StringParam, withDefault } from "use-query-params"
import dayjs from "dayjs"
import timezone from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"
import Fuse from "fuse.js"
dayjs.extend(utc)
dayjs.extend(timezone)

const bgGradients = {
  0: "bg-red-300",
  1: "bg-yellow-300",
  2: "bg-blue-300",
  3: "bg-pink-300",
  4: "bg-gray-300",
  5: "bg-green-300",
}

const ErrorMessageBox = ({ message, onRetry }) => (
  <div className="m-5 p-5 bg-red-100 text-red-800 rounded-md text-center">
    <p>{message}</p>
    {onRetry && (
      <button
        onClick={onRetry}
        className="mt-2 px-4 py-2 bg-white text-black rounded shadow hover:bg-gray-100"
      >
        Retry
      </button>
    )}
  </div>
)

const SpecialEventCard = ({ event, idx, toggleFavorite }) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <button
      key={idx}
      className={`border rounded-lg p-5 md:w-96 w-full flex flex-col gap-2 text-left shadow-md hover:shadow-xl transition-transform transform hover:scale-105 
      ${event.color}`}
      onClick={() => setExpanded(!expanded)}
    >
      <h2 className="font-heading text-lg font-semibold text-center mx-auto">{event.title}</h2>
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-col justify-between gap-1">
          {event.location && (
            <span className="flex flex-row gap-2">
              <Icon icon="carbon:location-filled" className="text-xl text-blue-800" />
              <span>{event.location}</span>
            </span>
          )}
          <span className="flex flex-row gap-2">
            <Icon icon="mingcute:time-line" className="text-xl text-blue-800" />
            <span>Click to see times!</span>
          </span>
        </div>
        <div className="ml-4">
          <button className="w-10 h-10" onClick={(e) => { e.stopPropagation(); toggleFavorite(event.id) }}>
            <Icon icon="ic:round-star" className={`text-3xl duration-200 ${event.favorite ? "text-yellow-400" : "text-gray-400"}`} />
          </button>
        </div>
      </div>
      <div className={`${expanded ? "" : "h-30 line-clamp-4"} my-2`}>
        <div dangerouslySetInnerHTML={{ __html: event.description }} />
      </div>
      {expanded && (
        <div className="flex flex-col w-full gap-3">
          <h3 className="font-heading">Event Times</h3>
          <ul>
            {event.slots.map((slot) => <li key={slot.display}>{slot.display}</li>)}
          </ul>
        </div>
      )}
      <Icon className="mx-auto text-2xl" icon={expanded ? "material-symbols:expand-less" : "material-symbols:expand-more"} />
    </button>
  )
}

const SpecialEvents = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [numPages, setNumPages] = useState(10)
  const [searchTerm, setSearchTerm] = useQueryParam("sq", withDefault(StringParam, ""))
  const [searchBoxText, setSearchBoxText] = useState("")
  const [searchOpen, setSearchOpen] = useState(false)
  const itemsPerPage = 30

  const fetcher = (url) => fetch(url).then((res) => res.json())

  const { data, error } = useSWR(
    `https://n11.eohillinois.org/api/events?populate=occurences&pagination[page]=${currentPage}&pagination[pageSize]=${itemsPerPage}`,
    fetcher
  )

  if (error) return <ErrorMessageBox message="Failed to load. Please try again." onRetry={() => window.location.reload()} />
  if (!data) return (
    <div className="flex w-full justify-center items-center flex-col">
      <p className="font-bold text-xl m-4">Loading...</p>
      <img src="/assets/logo/gear1.gif" alt="loading" className="w-20" />
    </div>
  )

  const items = data.data.map((event, idx) => {
    const occurences = event.occurences.map((occ) => ({
      startTime: occ.startTime,
      endTime: occ.endTime,
      colIndex: idx,
    })).map((slot) => {
      const start = dayjs(slot.startTime).tz("America/Chicago")
      const end = dayjs(slot.endTime).tz("America/Chicago")
      return { display: `${start.format("dddd")}, ${start.format("h:mm")} to ${end.format("h:mm a")}` }
    })
    return {
      id: idx,
      title: event.title || "",
      location: event.location || "",
      description: event.description || "",
      slots: occurences,
      favorite: false,
      picture: event.picture?.url || "",
      shortTitle: event.shortTitle || "",
      color: bgGradients[idx % Object.keys(bgGradients).length] || "",
    }
  })

  const fuseOptions = {
    includeScore: true,
    threshold: 0.35,
    distance: 100,
    minMatchCharLength: 2,
    ignoreLocation: true,
    keys: ['title', 'description', 'location']
  }
  const fuse = new Fuse(items, fuseOptions)
  const trimmedQuery = searchTerm.trim()
  const fuseResults = trimmedQuery ? fuse.search(trimmedQuery) : null
  const filteredItems = fuseResults ? fuseResults.map(res => res.item) : items

  const runSearch = () => {
    setSearchTerm(searchBoxText.trim())
    setSearchBoxText("")
    setSearchOpen(false)
    setCurrentPage(1)
  }

  const EventsContainer = ({ initialItems }) => {
    const [items, setItems] = useState(() => {
      // Load favorited events from localStorage
      const storedFavorites = JSON.parse(localStorage.getItem("favoritedEvents")) || {};
      return initialItems.map(item => ({
          ...item,
          favorite: storedFavorites[item.id] || false, // Apply stored favorite status
      }));
    });

    const toggleFavorite = (id) => {
        setItems((prev) => {
            const updatedItems = prev.map((i) =>
                i.id === id ? { ...i, favorite: !i.favorite } : i
            );

            // Save updated favorite status in localStorage
            const newFavorites = updatedItems.reduce((acc, item) => {
                acc[item.id] = item.favorite;
                return acc;
            }, {});

            localStorage.setItem("favoritedEvents", JSON.stringify(newFavorites));

            return updatedItems;
        });
    };  
    return (
      <div>
        <h1 className="font-heading text-3xl mt-2 md:text-center md:mx-0 m-10">Favorited Events</h1>
        <div className="w-full flex flex-wrap justify-center gap-5 px-4 max-w-screen-xl mx-auto">
          {items.filter(i => i.favorite).map((item, idx) => <SpecialEventCard event={item} idx={idx} key={idx} toggleFavorite={toggleFavorite} />)}
        </div>
        <h1 className="font-heading text-3xl mt-2 md:text-center md:mx-0 m-10">All Events</h1>
        <div className="w-full flex flex-wrap justify-center gap-5 px-4 max-w-screen-xl mx-auto">
          {items.map((item, idx) => <SpecialEventCard event={item} idx={idx} key={idx} toggleFavorite={toggleFavorite} />)}
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-5">
      <span className="flex flex-row justify-between mx-8">
        <h1 className="font-heading text-5xl mt-2 md:text-center md:mx-0">Special Events</h1>
        <button onClick={() => setSearchOpen(!searchOpen)}>
          <Icon icon="bx:search" className="text-3xl" />
        </button>
      </span>

      {searchOpen && (
        <span className="flex flex-row w-full px-5">
          <input
            className="border rounded-l-xl p-2 border-gray-600 duration-300 flex-grow"
            placeholder="Search title, description, or location"
            onChange={(e) => setSearchBoxText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && runSearch()}
            value={searchBoxText}
          />
          <button
            className="rounded-r-xl bg-blue-700 p-3 font-semibold text-white"
            onClick={runSearch}
          >
            Go
          </button>
        </span>
      )}

      {searchTerm.length > 0 && (
        <div className="flex flex-row px-5 justify-between items-center">
          <p>Searching for: <span className="font-semibold">{searchTerm}</span></p>
          <button onClick={() => { setSearchTerm(""); setSearchOpen(false) }}>
            <Icon icon="mdi:clear-outline" className="text-black text-3xl" />
          </button>
        </div>
      )}

      <EventsContainer initialItems={filteredItems} />

      <div className="flex flex-row justify-between items-center mx-5">
        <p>Page {currentPage} of {numPages}</p>
        <div className="flex flex-row gap-3">
          <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="disabled:text-gray-500">
            <Icon icon="ic:round-navigate-before" className="text-3xl" />
          </button>
          <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, numPages))} disabled={currentPage === numPages} className="disabled:text-gray-500">
            <Icon icon="ic:round-navigate-next" className="text-3xl" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SpecialEvents