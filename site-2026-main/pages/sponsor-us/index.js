import Bubble from "@/bubble";
import Button from "@/button";
import SponsorCard from "@/sponsor-card";
import { Fragment } from 'react';
import Collapsible from 'react-collapsible';
import { BsChevronDown } from 'react-icons/bs';
import Section from '@/section';

export default function SponsorUsPage() {
    return (
        <Fragment>̵̵̵
            <main>
                <div className="min-h-screen">
                    <div>
                        <img
                            className="absolute hidden lg:block not-sr-only"
                            style={{ zIndex: -1, filter: 'saturate(0.8) opacity(0.2)', height: '150vh', objectFit: "cover" }}
                            src="assets/background/red_grainger.jpg"
                            frameBorder="0"
                            width={1970}
                        />
                    </div>
                    <div className="w-3/4 h-full m-auto pt-20">
                        <h1 className="font-lovelo text-center mt-3 font-bold text-5xl">
                            Sponsor Us
                        </h1>
                        <div className="h-10" />
                        <div className="col-span-3 lg:w-5/6 lg:mx-auto lg:grid lg:grid-cols-5 mb-10 block">
                            <div className="lg:col-span-3 mb-20">
                                <p className="text-left font-montserrat text-sm">
                                    <br />
                                    <br />
                                    Dear Potential Corporate Partner,
                                    <br />
                                    <br />
                                    Engineering Open House (EOH) is an annual showcase of engineering, science, technology, and student innovation held at the University of Illinois at Urbana-Champaign. Engineering Open House will be hosted this year from April 4th to April 5th 2025. Now, in its 104th year, EOH draws over 35,000 attendees and participants from across the United States, making it one of the largest student-run events of its kind.
                                    <br />
                                    <br />
                                    As an entirely student-run event, EOH is mainly funded by corporate sponsorships. Your company’s contributions will directly benefit students, exhibitors, and educators working to inspire the next generation of engineers. We hope that you choose to join us and we look forward to working with you and your company in making EOH 2025 better than ever. Thank you for your time and interest, please don’t hesitate to contact us with any questions!
                                    <br />
                                    <br />
                                    Sincerely,
                                    <br />
                                    <br />
                                    The Engineering Open House Corporate Team
                                </p>
                                <div className="relative flex py-5 items-center">
                                    <div className="flex-grow border-t border-gray-400"></div>
                                    <div className="flex-grow border-t border-gray-400"></div>
                                </div>
                                <div className="text-center font-montserrat font-bold">
                                    <p>
                                        Roshni Matthew | Aarya Patel | Shiv Gohil | Madeline Kim
                                    </p>
                                </div>
                                <div className="text-center font-montserrat text-sm">eoh-corporate@ec.illinois.edu</div>
                            </div>
                            <div className="hidden lg:block lg:col-span-2 text-center">
                                <Bubble quantity="35,000+" quality="Attendees" color="#332526" />
                                <Bubble quantity="250+" quality="Students Involved" color="#473335" />
                                <Bubble quantity="130+" quality="Student-Run Exhibits" color="#6b4c4f" />
                            </div>
                        </div>
                    </div>
                </div>
                <Section color="white" title="Sponsorship Packages">
                <div className="inline-block font-montserrat text-sm w-3/4 ml-auto mr-auto">
                        <div className="font-montserrat mb-8">
                            Our sponsorship offerings broadly fall into three key categories: choosing a tier in our <span className='italic'>Sponsorship Package</span> system,
                            selecting one of our <span className='italic'>Focus Bundles</span> to sponsor a particular aspect of EOH, or choosing to sponsor a <span className="italic">Specific Event
                                and Student Exhibit</span>. Should you find that these options do not align with what you had in mind, please contact us,
                            and we will work with your representatives to build a sponsorship option that meets your liking.
                        </div>
                        <div className="max-w-2xl mx-auto">
                            <div className="font-montserrat font-white">
                                <Collapsible trigger={[<p className="p-4">SPONSORSHIP PACKAGE</p>, <div className="mr-4"><BsChevronDown /></div>]} className='sponsorship-outer' openedClassName='sponsorship-outer' contentOuterClassName="opened-content" triggerOpenedClassName="trigger-bold" triggerClassName="bg-[#a2d3c2] hover:bg-[#8bbfa3] text-white">
                                    <Collapsible trigger={[<p className="p-4">Silver Sponsorship Package - $3,000</p>, <div className="mr-4"><BsChevronDown /></div>]} triggerOpenedClassName="trigger-opened" contentOuterClassName="opened-sub-content-content">
                                        <span className="sponsor-package-describe py-3">
                                            <span className="text-lg font-bold italic p-10">Company Name and Logo Publicity</span> <br />
                                            <p className="text-base mt-3 mx-10">
                                                Your company name and logo will be advertised on the EOH website, ads and
                                                materials, and your sponsorship will be announced across our channels
                                            </p>
                                                                                     
                                        </span>
                                        <span className="sponsor-package-describe py-3">
                                            <span className="text-lg font-bold italic p-10">Distribute Promotional Items</span> <br />
                                            <p className="text-base mt-3 mx-10">
                                                Your company's merchandise will be distributed at Engineering Open House
                                                by our volunteers at our designated sponsor stations
                                            </p>
                                        </span>
                                        <span className="sponsor-package-describe py-3">
                                            <span className="text-lg font-bold italic p-10">Black and White Ad Space - <span className="underline">1/4 Page</span></span> <br />
                                            <p className="text-base mt-3 mx-10">
                                                We will run an ad in the EOH newsletter with your company's message and
                                                logo, based on your chosen corporate sponsorship tier
                                            </p>
                                            
                                        </span>
                                        <div className="mx-auto text-center mb-5">
                                                <p className="text-lg mb-2"></p>
                                                <Button type='big' className="px-5 py-5 rounded-none drop-shadow-sm font-montserrat hover:shadow-lg max-w-md" href="https://www.givecampus.com/campaigns/55197/donations/new">
                                                    <span className="font-montserrat font-bold text-2xl">Donate</span>
                                                </Button>
                                        </div>  
                                        <div className="mx-auto text-center mb-3 mt-5">
                                            <SponsorCard
                                                cost="$3,000"
                                                id="silver-bundle-form"
                                                giftAmount1="2,792.50"
                                                nongiftAmount2="207.50"
                                            />
                                        </div>
                                    </ Collapsible>
                                    <Collapsible trigger={[<p className="p-4">Gold Sponsorship Package - $5,000</p>, <div className="mr-4"><BsChevronDown /></div>]} triggerOpenedClassName="trigger-opened" contentOuterClassName="opened-sub-content-content">
                                        <span className="sponsor-package-describe py-3">
                                            <span className="text-lg font-bold italic p-10">Company Name and Logo Publicity</span> <br />
                                            <p className="text-base mt-3 mx-10">
                                                Your company name and logo will be advertised on the EOH website, ads and
                                                materials, and your sponsorship will be announced across our channels
                                            </p>
                                        </span>
                                        <span className="sponsor-package-describe py-3">
                                            <span className="text-lg font-bold italic p-10">Distribute Promotional Items</span> <br />
                                            <p className="text-base mt-3 mx-10">
                                                Your company's merchandise will be distributed at Engineering Open House
                                                by our volunteers at our designated sponsor stations
                                            </p>
                                        </span>
                                        <span className="sponsor-package-describe py-3">
                                            <span className="text-lg font-bold italic p-10">Black and White Ad Space - <span className="underline">1/2 Page</span></span> <br />
                                            <p className="text-base mt-3 mx-10">
                                                We will run an ad in the EOH newsletter with your company's message and
                                                logo, based on your chosen corporate sponsorship tier
                                            </p>
                                        </span>
                                        <span className="sponsor-package-describe py-3 gold-bg">
                                            <span className="text-lg font-bold italic p-10">EOH Resume Book</span> <br />
                                            <p className="text-base mt-3 mx-10">
                                                Gain access to the resumes of all student exhibitors involved in EOH to further
                                                professional connections with engineering talent from University of Illinois
                                            </p>
                                        </span>
                                        <div className="mx-auto text-center mb-5">
                                                <p className="text-lg mb-2"></p>
                                                <Button type='big' className="px-5 py-5 rounded-none drop-shadow-sm font-montserrat hover:shadow-lg max-w-md" href="https://www.givecampus.com/campaigns/55199/donations/new">
                                                    <span className="font-montserrat font-bold text-2xl">Donate</span>
                                                </Button>
                                        </div>  
                                        <div className="mx-auto text-center mb-3 mt-5">
                                            <SponsorCard
                                                cost="$5,000"
                                                id="gold-bundle-form"
                                                giftAmount1="4,665.00"
                                                nongiftAmount2="335.00"
                                            />
                                        </div>
                                    </ Collapsible>
                                    <Collapsible trigger={[<p className="p-4">Platinum Sponsorship Package - $8,000</p>, <div className="mr-4"><BsChevronDown /></div>]} triggerOpenedClassName="trigger-opened" contentOuterClassName="opened-sub-content-content">
                                        <span className="sponsor-package-describe py-3">
                                            <span className="text-lg font-bold italic p-10">Company Name and Logo Publicity</span> <br />
                                            <p className="text-base mt-3 mx-10">
                                                Your company name and logo will be advertised on the EOH website, ads and
                                                materials, and your sponsorship will be announced across our channels
                                            </p>
                                        </span>
                                        <span className="sponsor-package-describe py-3">
                                            <span className="text-lg font-bold italic p-10">Distribute Promotional Items</span> <br />
                                            <p className="text-base mt-3 mx-10">
                                                Your company's merchandise will be distributed at Engineering Open House
                                                by our volunteers at our designated sponsor stations
                                            </p>
                                        </span>
                                        <span className="sponsor-package-describe py-3">
                                            <span className="text-lg font-bold italic p-10">Black and White Ad Space - <span className="underline">Full Page</span></span> <br />
                                            <p className="text-base mt-3 mx-10">
                                                We will run an ad in the EOH newsletter with your company's message and
                                                logo, based on your chosen corporate sponsorship tier
                                            </p>
                                        </span>
                                        <span className="sponsor-package-describe py-3 gold-bg">
                                            <span className="text-lg font-bold italic p-10">EOH Resume Book</span> <br />
                                            <p className="text-base mt-3 mx-10">
                                                Gain access to the resumes of all student exhibitors involved in EOH to further
                                                professional connections with engineering talent from University of Illinois
                                            </p>
                                        </span>
                                        <span className="sponsor-package-describe py-3 blue-bg">
                                            <span className="text-lg font-bold italic p-10">Campus Publicity Event</span> <br />
                                            <p className="text-base mt-3 mx-10">
                                                Host a tech talk or participate in an EOH panel over the course of the
                                                weekend, as a part of your sponsorship benefits
                                            </p>
                                        </span>
                                        <div className="mx-auto text-center mb-5">
                                                <p className="text-lg mb-2"></p>
                                                <Button type='big' className="px-5 py-5 rounded-none drop-shadow-sm font-montserrat hover:shadow-lg max-w-md" href="https://www.givecampus.com/campaigns/55203/donations/new">
                                                    <span className="font-montserrat font-bold text-2xl">Donate</span>
                                                </Button>
                                        </div>  
                                        <div className="mx-auto text-center mb-3 mt-5">
                                            <SponsorCard
                                                cost="$8,000"
                                                id="platinum-bundle-form"
                                                giftAmount1="7,495.00"
                                                nongiftAmount2="505.00"
                                            />
                                        </div>
                                    </ Collapsible>
                                    <div className="relative flex py-2 items-center">
                                        <div className="flex-grow border-t border-gray-400"></div>
                                        <div className="flex-grow border-t border-gray-400"></div>
                                    </div>
                                    {/* <img src='/assets/images/sponsorship_comparison.png' className="mx-auto object-contain h-64 my-5" /> */}
                                </Collapsible>
                                <Collapsible trigger={[<p className="p-4">FOCUS BUNDLE</p>, <div className="mr-4"><BsChevronDown /></div>]} className='focus-bundle-outer' openedClassName='focus-bundle-outer' contentOuterClassName="opened-content" triggerOpenedClassName="trigger-bold" triggerClassName="bg-[#c578d6] hover:bg-[#9e4fb8] text-white">
                                    <Collapsible trigger={[<p className="p-4">Outreach Focus Bundle</p>, <div className="mr-4"><BsChevronDown /></div>]} triggerOpenedClassName="trigger-opened" contentOuterClassName="opened-sub-content-content">
                                        <p className="text-lg text-left my-3 mx-10">
                                        You have the option of being the title sponsor of our 
                                        Illinois Engineering Challenge or the Discover EOH 
                                        program for K-12 students which helps bring students 
                                        to visit EOH, and are able to participate in a tech 
                                        talk or panel of your choice. There is an additional 
                                        option of sponsoring the Build-a-Blinkie Program which 
                                        helps visitors learn how to solder, and each printed 
                                        circuit board given out has the sponsor logo on the back.
                                        </p>
                                        <div className="mx-auto text-center mb-5">
                                                <p className="text-lg mb-2"></p>
                                                <Button type='big' className="px-5 py-5 rounded-none drop-shadow-sm font-montserrat hover:shadow-lg max-w-md" href="https://www.givecampus.com/campaigns/49636/donations/new?value=2500&">
                                                    <span className="font-montserrat font-bold text-2xl">Donate</span>
                                                </Button>
                                        </div>  
                                        <div className="mx-auto text-center mb-3 mt-5">
                                            <SponsorCard
                                                cost="$2,500"
                                                id="outreach-bundle-form"
                                                giftAmount1="2,500.00"
                                            />
                                        </div>
                                    </ Collapsible>
                                    <Collapsible trigger={[<p className="p-4">Spotlight Focus Bundle</p>, <div className="mr-4"><BsChevronDown /></div>]} triggerOpenedClassName="trigger-opened" contentOuterClassName="opened-sub-content-content">
                                        <p className="text-lg text-left my-3 mx-10">
                                            Allows you to be the title sponsor of one of
                                            our flagship events, such as the Tesla Coil
                                            Concert and the Keynote Speech. You also
                                            have the benefit of sponsoring our Student
                                            Exhibit Awards.
                                        </p>
                                        <div className="mx-auto text-center mb-5">
                                                <p className="text-lg mb-2"></p>
                                                <Button type='big' className="px-5 py-5 rounded-none drop-shadow-sm font-montserrat hover:shadow-lg max-w-md" href="https://www.givecampus.com/campaigns/49636/donations/new?value=2500&">
                                                    <span className="font-montserrat font-bold text-2xl">Donate</span>
                                                </Button>
                                        </div>  
                                        <div className="mx-auto text-center mb-3 mt-5">
                                            <SponsorCard
                                                cost="$2,500"
                                                id="spotlight-bundle-form"
                                                giftAmount1="2,500.00"
                                            />
                                        </div>
                                    </ Collapsible>
                                    <Collapsible trigger={[<p className="p-4">Competition Focus Bundle</p>, <div className="mr-4"><BsChevronDown /></div>]} triggerOpenedClassName="trigger-opened" contentOuterClassName="opened-sub-content-content">
                                        <p className="text-lg text-left my-3 mx-10">
                                            Become a title sponsor,
                                            provide a sponsored award,
                                            host a tech talk during EOH,
                                            and gain access to the
                                            exhibitor resume book for
                                            one of our EOH
                                            competitions.<br />
                                            <div className="relative flex py-2 items-center">
                                                <div className="flex-grow border-t border-gray-400"></div>
                                                <div className="flex-grow border-t border-gray-400"></div>
                                            </div>
                                            These include:
                                            <ul key="total1">
                                                <li key="uniqueId1">- High School Design Competition</li>
                                                <li key="uniqueId2">- Middle School Design Competition</li>
                                                <li key="uniqueId3">- Robotics Design Competition</li>
                                            </ul>
                                        </p>
                                        <div className="mx-auto text-center mb-5">
                                                <p className="text-lg mb-2"></p>
                                                <Button type='big' className="px-5 py-5 rounded-none drop-shadow-sm font-montserrat hover:shadow-lg max-w-md" href="https://www.givecampus.com/campaigns/49636/donations/new?value=2500&">
                                                    <span className="font-montserrat font-bold text-2xl">Donate</span>
                                                </Button>
                                        </div>  
                                        <div className="mx-auto text-center mb-3 mt-5">
                                            <SponsorCard
                                                cost="$2,500"
                                                id="competition-bundle-form"
                                                giftAmount1="2,500.00"
                                            />
                                        </div>
                                    </ Collapsible>
                                    <div className="relative flex py-2 items-center">
                                        <div className="flex-grow border-t border-gray-400"></div>
                                        <div className="flex-grow border-t border-gray-400"></div>
                                    </div>
                                    <span className="text-xl font-bold">All of our focused sponsorship bundles are valued at $2,500.</span>
                                </Collapsible>
                                <Collapsible trigger={[<p className="p-4">ITEMIZED SPONSORSHIP</p>, <div className="mr-4"><BsChevronDown /></div>]} className="itemized-sponsorship-outer" openedClassName='itemized-sponsorship-outer' contentOuterClassName="opened-content" triggerOpenedClassName="trigger-bold" triggerClassName="bg-[#ff8400] hover:bg-[#e67300] text-white">
                                    <Collapsible trigger={[<p className="p-4">Advertisements</p>, <div className="mr-4"><BsChevronDown /></div>]} contentOuterClassName="opened-sub-content-content" triggerOpenedClassName="trigger-opened">
                                        <p className="font-bold text-xl mt-5">Display Vehicle Advertisement</p>
                                        <span className="italic">
                                            <ul key="total4">
                                                <li key="uniqueId4">&nbsp;&nbsp;&nbsp;&nbsp;
                                                <div className="mx-auto text-center mb-5">
                                                <p className="text-lg mb-2"></p>
                                                <Button type='big' className="px-5 py-5 rounded-none drop-shadow-sm font-montserrat hover:shadow-lg max-w-md" href="https://www.givecampus.com/campaigns/49636/donations/new?value=500&">
                                                    <span className="font-montserrat font-bold text-2xl">Donate</span>
                                                </Button>
                                                </div>  
                                                    <SponsorCard
                                                        text={"Regular - $500"}
                                                        cost="$500"
                                                        id="vehicle-regular-bundle-form"
                                                        giftAmount1="500.00" />
                                                </li>
                                                <li key="uniqueId5">&nbsp;&nbsp;&nbsp;&nbsp;
                                                <div className="mx-auto text-center mb-5">
                                                <p className="text-lg mb-2"></p>
                                                <Button type='big' className="px-5 py-5 rounded-none drop-shadow-sm font-montserrat hover:shadow-lg max-w-md" href="https://www.givecampus.com/campaigns/49636/donations/new?value=1500&">
                                                    <span className="font-montserrat font-bold text-2xl">Donate</span>
                                                </Button>
                                                </div>  
                                                    <SponsorCard
                                                        text={"Oversized - $1,500"}
                                                        cost="$1,500"
                                                        id="vehicle-oversized-bundle-form"
                                                        giftAmount1="1,500.00" />
                                                </li>
                                            </ul><br />
                                        </span>
                                        <div className="flex-grow border-t border-gray-400"></div>
                                        <p className="font-bold text-xl mt-5">Black & White Advertisement </p>
                                        <span className="italic">
                                            <ul key="total2">
                                                <li key="uniqueId6">&nbsp;&nbsp;&nbsp;&nbsp;
                                                <div className="mx-auto text-center mb-5">
                                                <p className="text-lg mb-2"></p>
                                                <Button type='big' className="px-5 py-5 rounded-none drop-shadow-sm font-montserrat hover:shadow-lg max-w-md" href="https://www.givecampus.com/campaigns/55293/donations/new">
                                                    <span className="font-montserrat font-bold text-2xl">Donate</span>
                                                </Button>
                                                </div>  
                                                    <SponsorCard
                                                        text={"1/4 Page - $250"}
                                                        cost="$250"
                                                        id="blackwhite-1-4-bundle-form"
                                                        giftAmount1="242.50"
                                                        nongiftAmount2="7.50" />
                                                </li>
                                                <li key="uniqueId7">&nbsp;&nbsp;&nbsp;&nbsp;
                                                <div className="mx-auto text-center mb-5">
                                                <p className="text-lg mb-2"></p>
                                                <Button type='big' className="px-5 py-5 rounded-none drop-shadow-sm font-montserrat hover:shadow-lg max-w-md" href=" https://www.givecampus.com/campaigns/55295/donations/new">
                                                    <span className="font-montserrat font-bold text-2xl">Donate</span>
                                                </Button>
                                                </div>  
                                                    <SponsorCard
                                                        text={"1/2 Page - $500"}
                                                        cost="$500"
                                                        id="blackwhite-1-2-bundle-form"
                                                        giftAmount1="485.00"
                                                        nongiftAmount2="15.00" />
                                                </li>
                                                <li key="uniqueId8">&nbsp;&nbsp;&nbsp;&nbsp;
                                                <div className="mx-auto text-center mb-5">
                                                <p className="text-lg mb-2"></p>
                                                <Button type='big' className="px-5 py-5 rounded-none drop-shadow-sm font-montserrat hover:shadow-lg max-w-md" href="https://www.givecampus.com/campaigns/55296/donations/new">
                                                    <span className="font-montserrat font-bold text-2xl">Donate</span>
                                                </Button>
                                                </div>  
                                                    <SponsorCard
                                                        text={"Full Page - $750"}
                                                        cost="$750"
                                                        id="blackwhite-full-bundle-form"
                                                        giftAmount1="725.00"
                                                        nongiftAmount2="25.00" />
                                                </li>
                                            </ul>
                                        </span>
                                        <div className="flex-grow border-t border-gray-400"></div>
                                        <p className="font-bold text-xl mt-5">Color Advertisement </p>
                                        <span className="italic">
                                            <ul key="total3">
                                                <li key="uniqueId9">&nbsp;&nbsp;&nbsp;&nbsp;
                                                <div className="mx-auto text-center mb-5">
                                                <p className="text-lg mb-2"></p>
                                                <Button type='big' className="px-5 py-5 rounded-none drop-shadow-sm font-montserrat hover:shadow-lg max-w-md" href="https://www.givecampus.com/campaigns/55299/donations/new">
                                                    <span className="font-montserrat font-bold text-2xl">Donate</span>
                                                </Button>
                                                </div>  
                                                    <SponsorCard
                                                        text={"1/2 Page - $1,000"}
                                                        cost="$1,000"
                                                        id="color-1-2-bundle-form"
                                                        giftAmount1="960.00"
                                                        nongiftAmount2="40.00" />
                                                </li>
                                                <li key="uniqueId10">&nbsp;&nbsp;&nbsp;&nbsp;
                                                <div className="mx-auto text-center mb-5">
                                                <p className="text-lg mb-2"></p>
                                                <Button type='big' className="px-5 py-5 rounded-none drop-shadow-sm font-montserrat hover:shadow-lg max-w-md" href="https://www.givecampus.com/campaigns/55302/donations/new">
                                                    <span className="font-montserrat font-bold text-2xl">Donate</span>
                                                </Button>
                                                </div>  
                                                    <SponsorCard
                                                        text={"Full Page - $2,000"}
                                                        cost="$2,000"
                                                        id="color-full-bundle-form"
                                                        giftAmount1="1,920.00"
                                                        nongiftAmount2="80.00" />
                                                </li>
                                            </ul>
                                        </span>
                                    </ Collapsible>
                                    <Collapsible trigger={[<p className="p-4">Interactive</p>, <div className="mr-4"><BsChevronDown /></div>]} triggerOpenedClassName="trigger-opened" contentOuterClassName="opened-sub-content-content">
                                        <br />
                                        <div className="mx-auto text-center mb-5">
                                                <p className="text-lg mb-2"></p>
                                                <Button type='big' className="px-5 py-5 rounded-none drop-shadow-sm font-montserrat hover:shadow-lg max-w-md" href="https://www.givecampus.com/campaigns/49636/donations/new?value=800&">
                                                    <span className="font-montserrat font-bold text-2xl">Donate</span>
                                                </Button>
                                                </div>  
                                        <SponsorCard
                                            text={"Host a Tech Talk or Panel - $800"}
                                            cost="$800"
                                            id="interactive-techtalk-bundle-form"
                                            giftAmount1="800.00" /><br />
                                            <div className="mx-auto text-center mb-5">
                                                <p className="text-lg mb-2"></p>
                                                <Button type='big' className="px-5 py-5 rounded-none drop-shadow-sm font-montserrat hover:shadow-lg max-w-md" href="https://www.givecampus.com/campaigns/49636/donations/new?value=3000&">
                                                    <span className="font-montserrat font-bold text-2xl">Donate</span>
                                                </Button>
                                                </div>  
                                        <SponsorCard
                                            text={"Sponsor the Exhibitor Ceremonies - $3,000"}
                                            cost="$3,000"
                                            id="interactive-resumebook-form"
                                            giftAmount1="3,000.00" /><br />
                                            <div className="mx-auto text-center mb-5">
                                                <p className="text-lg mb-2"></p>
                                                <Button type='big' className="px-5 py-5 rounded-none drop-shadow-sm font-montserrat hover:shadow-lg max-w-md" href="https://www.givecampus.com/campaigns/55588/donations/new">
                                                    <span className="font-montserrat font-bold text-2xl">Donate</span>
                                                </Button>
                                                </div>  
                                        <SponsorCard
                                            text={"Student Career Fair Booth - $500"}
                                            cost="$500"
                                            id="interactive-productdemo-form"
                                            giftAmount1="450.00" /><br />
                                            <div className="mx-auto text-center mb-5">
                                                <p className="text-lg mb-2"></p>
                                                <Button type='big' className="px-5 py-5 rounded-none drop-shadow-sm font-montserrat hover:shadow-lg max-w-md" href="https://www.givecampus.com/campaigns/49636/donations/new?value=500&">
                                                    <span className="font-montserrat font-bold text-2xl">Donate</span>
                                                </Button>
                                                </div>  
                                        <SponsorCard
                                            text={"Exhibitor Resume Book - $500"}
                                            cost="$500"
                                            id="interactive-capstone-form"
                                            giftAmount1="500.00" /><br />
                                            <div className="mx-auto text-center mb-5">
                                                <p className="text-lg mb-2"></p>
                                                <Button type='big' className="px-5 py-5 rounded-none drop-shadow-sm font-montserrat hover:shadow-lg max-w-md" href="https://www.givecampus.com/campaigns/55623/donations/new">
                                                    <span className="font-montserrat font-bold text-2xl">Donate</span>
                                                </Button>
                                                </div>  
                                        <SponsorCard
                                            text={"Additional Representative - $500"}
                                            cost="$500"
                                            id="interactive-capstone-form"
                                            giftAmount1="460.00" /><br />
                                            <div className="mx-auto text-center mb-5">
                                                <p className="text-lg mb-2"></p>
                                                <Button type='big' className="px-5 py-5 rounded-none drop-shadow-sm font-montserrat hover:shadow-lg max-w-md" href="https://www.givecampus.com/campaigns/55625/donations/new">
                                                    <span className="font-montserrat font-bold text-2xl">Donate</span>
                                                </Button>
                                                </div>  
                                        <SponsorCard
                                            text={"Product/Project Demo - $500"}
                                            cost="$500"
                                            id="interactive-capstone-form"
                                            giftAmount1="450.00" /><br />
                                            <div className="mx-auto text-center mb-5">
                                                <p className="text-lg mb-2"></p>
                                                <Button type='big' className="px-5 py-5 rounded-none drop-shadow-sm font-montserrat hover:shadow-lg max-w-md" href="https://www.givecampus.com/campaigns/49636/donations/new?value=800&">
                                                    <span className="font-montserrat font-bold text-2xl">Donate</span>
                                                </Button>
                                                </div>  
                                        <SponsorCard
                                            text={"Startup Showcase - $800"}
                                            cost="$800"
                                            id="interactive-capstone-form"
                                            giftAmount1="800.00" /><br />
                                            
                                    </ Collapsible>
                                    
                                </Collapsible>
                            </div>
                            <p className="font-montserrat w-5/6 text-center mx-auto mt-5 mb-2 pt-7">
                                To view sponsorship options as a PDF, see below.<br /><span className='font-bold'>Thanks for considering sponsoring EOH!</span>
                            </p>
                            <div className="mx-auto text-center mb-5">
                                <Button type="big" className="px-4 rounded-none drop-shadow-md font-montserrat bg-[#c578d6] hover:bg-[#9e4fb8] text-white"
                                onClick={() => window.open('/assets/sponsors/Sponsorship Packet 2024-2025.pptx.pdf', '_blank')}>
                                    <span className="font-montserrat font-bold text-md">Corporate Sponsorship Packet</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Section>
            </main>
        </Fragment>
    );
}

 