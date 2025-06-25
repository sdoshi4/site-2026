import { Schedule } from "../../components/schedule/schedule.js";

export default function ScheduleSection() {
    return (

        <div className='mb-10 mx-4 md:mx-20'>
            <p className='font-montserrat text-center text-xl m-5'>Scroll down and to the right to see all events and timings.</p>
            <p className='font-montserrat text-center text-xl m-5'>Click on any event or time slot to learn more!</p>
            <Schedule />
        </div>
    )
}
