const colors = ['blue-800', 'pink-700', 'yellow-600', 'red-700', 'purple-600', 'green-600']

const EventCard = (e) => {
    return (
        <a className={`w-[90vw] md:w-2/5 h-64 md:h-80 ${e.bg} bg-center bg-no-repeat bg-cover flex text-white flex-col justify-center text-center duration-300 rounded-lg hover:rounded-3xl`} href={e.link} key={e.title}>
            <div className="p-3 bg-black bg-opacity-0 h-2/3 flex flex-col justify-center">
                <h2 className="text-2xl font-semibold font-montserrat">{e.title}</h2>
                <p className={`font-semibold`}>{e.subtitle}</p>
                <p className="w-2/3 mx-auto mt-3">{e.blurb}</p>
                {e.link && <p className="pt-2 italic text-gray-200">Learn more</p>}
            </div>
        </a>
    )
}

export default function EventList() {

    const events = [
        {
            "title": "Middle School Design Competition",
            "subtitle": "April 4th at 11:30 AM",
            "blurb": "Middle school students in teams of 3 or 4 compete around a central theme",
            "link": '/msdc',
            "bg": "bg-msdc"
        },
        {
            "title": "High School Design Competition",
            "subtitle": "April 4th at 11:00 AM",
            "blurb": "High school students in teams of 3-5 members compete around a central theme",
            "link": '/hsdc',
            "bg": "bg-hsdc"
        },
        {
            "title": "Robobrawl",
            "subtitle": "April 4th and 5th, between Lot B1 and Transportation Building",
            "blurb": "Excited for Robobrawl 2025? Join us on for an exciting combat robotics showcase!",
            "bg": "bg-robobrawl"
        },
        {
            "title": "EOH x Mom's Weekend",
            "subtitle": "",
            "blurb": "We would like to invite all Grainger Engineering Moms to explore the unique features of EOH that have been organized in celebration.",
            "link": '/EOHxmoms.pdf',
            "bg": "bg-keynote"
        },
        {
            "title": "Startup Showcase",
            "subtitle": "April 5th at 11 AM, CIF",
            "blurb": "Come visit startup booths and experience demos, giveaways, and much more!",
            "link": '/showcase.pdf',
            "bg": "bg-startup"
        },
        {
            "title": "Tesla Coil Concert",
            "subtitle": "Sponsored by Chevron",
            "blurb": "Just as dark falls, visit the Bardeen Quad to see an electrifying display of light and sound. Starts Friday at 8:30 PM",
            "bg": "bg-tesla"
        },
    ]

    return (
        <div className="flex flex-wrap justify-center gap-3 bg-cover bg-center py-10" style={{ backgroundImage: "url('/assets/background/wavespic.png')" }}>
            {events.map(e => EventCard(e))}
        </div>
    )
}