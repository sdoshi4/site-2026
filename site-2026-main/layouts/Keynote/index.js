import { Icon } from "@iconify/react";
import { LOCATIONS } from "../../utilities/links.js";
import { useEffect, useState } from "react";

export const KeynoteSpeaker = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkWindowSize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust as per your mobile screen size
        };
        checkWindowSize();
        window.addEventListener("resize", checkWindowSize);
        return () => {
            window.removeEventListener("resize", checkWindowSize);
        };
    }, []);

    return (
        <div 
            className="flex flex-col md:flex-row md:justify-center items-center gap-8 px-14 relative min-h-[500px] pb-40"
            style={{
                backgroundImage: !isMobile && `linear-gradient(to bottom, rgba(255, 255, 255, 0) 60%, white 100%), url('/assets/images/website_moon.png')`,
                backgroundSize: 'contain', // Ensures the image fits without cropping
                backgroundPosition: 'center bottom -50px', // Moves the image further down
                backgroundRepeat: 'no-repeat'
            }}            
        >
            <div className="flex flex-col md:w-1/2 gap-3">
                <div className="flex flex-col md:flex-row gap-5 text-lg">
                    <span className="flex flex-row gap-3 items-center">
                        <Icon icon="mingcute:time-line" className="text-3xl" />
                        <h3>Saturday, April 5th - 3 PM to 4:30 PM</h3>
                    </span>
                    <span className="flex flex-row gap-3 items-center">
                        <Icon icon="mingcute:location-fill" className="text-3xl" />
                        <h3>
                            <a className="text-blue-600 hover:text-blue-500" href={LOCATIONS.CIF}>CIF</a> Monumental Steps
                        </h3>
                    </span>
                </div>
                <p>
                    Dr. Anna Oldani is passionate about creating opportunities for students to develop, technology to advance, and communities to grow. 
                        Come to her keynote speech to learn more about her journey through academia here at the University of Illinois 
                        and her career path!
                </p>
            </div>
            <img 
                src="assets/images/keynote-headshot.png" 
                alt="picture of Anna Oldani" 
                className="w-80 h-80 object-cover rounded-full" 
            />
        </div>
    );
};
