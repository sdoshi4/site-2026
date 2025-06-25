import Button from '@/button';


const colors = ['bg-blue-300', 'bg-pink-300', 'bg-yellow-200', 'bg-red-300', 'bg-purple-300']

const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
}

const interestForms = [
    {
        id: 2,
        displayText: "Join our Mailing List",
        link: "https://forms.gle/A7QqftMGGXKgbBmv5",
        color: colors[2]
    },
    {
        id: 3,
        displayText: "Volunteer Interest Form",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSfXMPKqUqPbuXvEY6CmlR8lLbFqCM7IYjls1iAi6unnfy-YDQ/viewform?usp=sf_link",
        color: colors[3]
    },
    {
        id: 5,
        displayText: "Field Trip Registration",
        link: "https://forms.gle/nA2pKvWvcwKZMair6",
        color: colors[1]
    },
]



export default function Interest() {
    return (
        <div className="flex flex-col md:flex-row mx-auto justify-center items-center py-3 md:py-10">
            <div className="px-3 md:w-2/5 md:pr-10 pb-5 text-center md:text-left">
                <h1 className='text-xl font-heading'>Engineering Open House</h1>
                <p className='py-3 pl-5 md:pl-0 pr-5 font-montserrat'>For the past 100+ years EOH has drawn hundreds of thousands of visitors
                    to the University of Illinois and provided a unique outlet for visitors to explore engineering. Welcome to EOH 2024.</p>
            </div>
            <div className="flex flex-col md:w-1/5 gap-4">
                {interestForms.map(props =>
                    <a className={`p-4 rounded-full ${props.color} hover:bg-opacity-75 duration-200 text-center text-lg md:text-xl font-montserrat min-w-[250px]`} href={props.link} referrerPolicy='no-referrer' target='_blank' key={props.id}>
                        {props.displayText}
                    </a>
                )}
            </div>
        </div>
    )
}
