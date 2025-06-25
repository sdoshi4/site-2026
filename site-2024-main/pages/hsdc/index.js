import { Fragment } from "react";
import Content from "@/content";
import Head from "next/head";
import Bubble from "@/bubble";
import Button from "@/button";
import SponsorCard from "@/sponsor-card";
import Info from "../../components/content/info.js";

export default function HSDC() {
  return (
    <Content title="High School Design Competition">
      <div className="lg:col-span-3 mb-10">
        <div className="font-montserrat col-span-5 mb-2">
                  Our High School Design Competition (HSDC) is an engineering-focused competition on Friday, April 4. Students work in teams of 3-5 to create a design and presentation that will be evaluated at the end of the competition. It’s a great opportunity for students to gain hands-on engineering design and teamwork experience!
                  <br />
                  <br />
                  <Info>
                    We have decided not to release the themes this year to ensure a fair competition.
                  </Info>
                  <br />
                  <div className="mt-6 flex justify-center">
                    <Button
                      type="big"
                      className="px-6 py-3 rounded-md drop-shadow-md text-lg font-semibold"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdVEhrlQPv42lkuALbw7vPeB5BgpL4TKH2VxtYO3acY1KWrpw/viewform"
                      target="_blank"
                    >
                      HSDC Registration
                    </Button>
                  </div>
                </div>
                <div className="h-7"></div>
              </div>
            </Content>
          );
        }
        