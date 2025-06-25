import React from 'react';

export default function Directors() {
    return (
        <div className="flex flex-col items-center gap-6 mx-6 md:mx-auto md:w-3/4 text-sm text-center md:text-justify">
        {/* Committee photo displayed above the directors' note */}
            <img 
                src="assets/images/committee-shot.jpg" 
                alt="Group picture of the EOH 2024 committee" 
                className='object-cover w-full max-w-3xl h-auto rounded-3xl' 
            />
            
            {/* Directors' note spans the width of the image */}
            <div className="w-full max-w-3xl border p-6 rounded-lg">
                <p className="mt-4">
                    Welcome to the 103rd Engineering Open House (EOH) at the University of Illinois Urbana-Champaign! We are so excited to welcome university students, faculty, community members, and field trips to campus. EOH is the nation’s largest student-run STEM (Science, Technology, Engineering, and Math) fair, where participants have the opportunity to showcase independent engineering projects and innovations unseen by the scientific community.                 </p>
                <p className="mt-2">
                    The theme of this year’s event is The Age of Innovation. It is our hope that EOH visitors will foster new curiosity in STEM and learn more about how students at the Grainger College of Engineering are at the forefront of innovation and scientific excellence. 
                </p>
                <p className="mt-5">
                    EOH 2025 features over 200 exhibits, including 10 student startups, and 14 special events such as rocket launches, student-engineered cars, and escape rooms. Each exhibit at EOH has been many months in the making, and the majority of projects are entirely student-led. EOH features work from every engineering discipline, celebrating not only current technologies but ushering in a new Age of Innovation.
                </p>
                <p className="mt-2">
                    This year, EOH has the special opportunity to be a part of the festivities of Mom’s Weekend. We would like to give all Grainger Engineering Moms a warm welcome, and invite you to explore the unique features of EOH that have been organized in celebration. 
                </p>
                <p className="mt-2">
                    EOH would not be possible without exhibitors, volunteers, corporate sponsors, judges, alumni, faculty, staff, and Grainger administration. We thank you for your dedication, hard work, creativity, and resilience in the face of challenges. Our largest thank you goes to the EOH Central Committee, composed of 29 directors all responsible for a unique aspect of EOH. EOH is an entirely student-led event, and planning has been in full force for almost an entire calendar year. We rely on the Central Committee to plan EOH on top of being full-time students — an immense responsibility that we would like to express our deepest gratitude for. 
                </p>
                <p className="mt-2">
                    We thank every single person for being a part of EOH and celebrating what it means to be a Grainger Engineer. We hope that you explore engineering and appreciate the new Age of Innovation that is happening right here at the University of Illinois.
                </p>
                <p className="mt-2">
                    Alicia Kim & Alyssa Huang <br />
                    Co-Directors, Engineering Open House 2025
                </p>
            </div>
        </div>
    );
}
