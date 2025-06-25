const EventCard = ({ description, title, location, dateTime }) => {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden m-2">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {location}
        </span>
      </div>
      <div className="px-6 pt-4 pb-2">
        {dateTime.map((time, index) => (
          <span
            key={index}
            className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2"
          >
            {time}
          </span>
        ))}
      </div>
    </div>
  )
}

export default EventCard
