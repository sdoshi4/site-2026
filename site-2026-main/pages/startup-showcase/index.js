import { Fragment } from "react";
import Content from "@/content";
import Head from "next/head";
import Bubble from "@/bubble";
import Button from "@/button";
import SponsorCard from "@/sponsor-card";

export default function StartupShowcasePage() {
  return (
    <Content title="Startup Showcase">
        <div className="lg:col-span-3 mb-10">
        <div className="font-montserrat col-span-5">
        EOH Startup Showcase is a subset of the exhibits dedicated to celebrating student startups. You can expect opportunities to be in a pitch competition for prizes up to <span className="font-bold">$750</span>, a chance to give startup talks to visitors, and exposure to our corporate sponsors. We are looking to host around 10 startup businesses from UIUC for EOH, and we are very excited about the awesome ventures that come out of Startup Showcase each year. EOH receives upwards of <span className="font-bold">45,000 visitors</span> every year, so the selected teams stand to gain a lot from participation in this event.
          </div>
          <br/>
          <br/>
          <p className="text-center font-montserrat font-bold">
          Applications close <span className="text-theme-red font-black">December 9th</span>, and next semester we will begin info sessions for the selected candidates to finalize your level of involvement. EOH seems far away, but if you expect to have a prototype or anything tangible come spring, fill out the form!
            
            <br/>
        </p>
        <div className="flex align-center justify-center mt-10">
            <Button type="mail" className="px-2 rounded-none drop-shadow-md inline-block" href="https://forms.gle/dCFFtqyNkED5cZwPA">
                Startup Showcase Form
            </Button>
        </div>
        <p className="text-center font-montserrat mt-5">Startup Showcase will occur during both days of EOH. More information will be provided during the info sessions. A rough itinerary is attached to the form.</p>
        
        </div>
    </Content>
  );
}
