


export default function AnimatedLogo() {
    return (
        <div className="
                    h-[250px] w-[250px] min-w-[250px] min-h-[250px] max-w-[250px] max-h-[250px]
                    md:h-[400px] md:w-[400px] md:min-w-[400px] md:min-h-[350px]
                    lg:h-[500px] lg:w-[500px] lg:min-w-[500px] lg:min-h-[500px]
                    ">
            <img src="/assets/logo/led.png" alt="EOH Logo" className="absolute floating
                    h-[3rem] w-[3rem] min-w-[3rem] min-h-[3rem] bottom-32 
                    md:h-[5rem] md:w-[5rem] md:min-w-[5rem] md:min-h-[5rem] md:bottom-48 md:-left-2
                    lg:h-[6rem] lg:w-[6rem] lg:min-w-[6rem] lg:min-h-[6rem] lg:bottom-56 lg:left-5 " />
            <img src="/assets/logo/flask.png" alt="EOH Logo" className="absolute shaking
                    h-[4rem] w-[4rem] min-w-[4rem] min-h-[4rem] bottom-32 left-6 
                    md:h-[6.5rem] md:w-[6.5rem] md:min-w-[6.5rem] md:min-h-[6.5rem] md:bottom-52 md:left-10
                    lg:h-[10rem] lg:w-[10rem] lg:min-w-[10rem] lg:min-h-[10rem] lg:bottom-60 lg:left-12" />
            <img src="/assets/logo/chemical.png" alt="EOH Logo" className="absolute spinning
                    h-[5rem] w-[5rem] min-w-[5rem] min-h-[5rem] bottom-32 left-[8.5rem]
                    md:h-[9rem] md:6-[9rem] md:min-w-[9rem] m6:min-h-[9rem] md:bottom-48 md:left-52
                    lg:h-[10rem] lg:w-[10rem] lg:min-w-[10rem] lg:min-h-[10rem] lg:bottom-64 lg:left-[18.5rem] " />
            <img src="/assets/logo/rocket.png" alt="EOH Logo" className="absolute vibrating
                    h-[5rem] w-[5rem] min-w-[5rem] min-h-[5rem] bottom-[7rem] left-48
                    md:h-[7rem] md:w-[7rem] md:min-w-[7rem] md:min-h-[7rem] md:bottom-44 md:left-[19rem]
                    lg:h-[9rem] lg:w-[9rem] lg:min-w-[9rem] lg:min-h-[9rem] lg:bottom-56 lg:left-[25rem] " />
            <img src="/assets/logo/alma-eoh-only.png" alt="EOH Logo" className="absolute bottom-0" />
        </div>
    )
}