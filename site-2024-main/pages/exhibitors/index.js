import { Fragment } from "react";
import Content from "@/content";
import Head from "next/head";
import Bubble from "@/bubble";
import Button from "@/button";
import SponsorCard from "@/sponsor-card";

export default function Exhibitors() {
  return (
    <Content title="Info for Exhibitors">
        <div className="lg:col-span-3 mb-10">
        <div className="font-montserrat col-span-5">
            Apply to be a part of this year's EOH! We encourage all colleges, research groups, classes, etc to apply and show off your exhibit to +40,000 people!<br/>Please reach out to <a href='mailto:eoh-exhibits@ec.illinois.edu' className="font-bold">eoh-exhibits@ec.illinois.edu</a> (Rohini Ramesh) with any questions or concerns!
          </div>
          <br/>
          <br/>
          <p className="text-center font-montserrat text-theme-teal font-bold">
            See below for our updated information for EOH 2023 Exhibitors!
            
            <br/>
        </p>
        </div>
    </Content>
  );
}
