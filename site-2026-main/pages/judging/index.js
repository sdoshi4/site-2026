import { Fragment } from "react";
import Content from "@/content";
import Head from "next/head";
import Bubble from "@/bubble";
import Button from "@/button";
import SponsorCard from "@/sponsor-card";

export default function Judging() {
  return (
    <Content title="Judging">
        <div className="lg:col-span-3 mb-10">
        <div className="font-montserrat col-span-5">
            Apply to be a judge for this year's EOH! Fill out this interest form below by <span className="font-bold">February 21st</span> to be considered!
          </div>
          <div className="font-montserrat">Please reach out to Jasmine Varghese at <a href='mailto:eoh-judging@ec.illinois.edu' className="font-bold underline">eoh-judging@ec.illinois.edu</a> if you have any questions or concerns.</div>
          <br/>
          <div className="mx-auto text-center">
            <Button
                type="big"
                className="px-4 rounded-none drop-shadow-md"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeWAGmupTZkA4tACNiOloWP0Wa4nQI-vwFRAyerxfsz2_UZug/viewform"
                target="_blank"
            >
                Interest Form
            </Button>
        </div>
        </div>
    </Content>
  );
}
