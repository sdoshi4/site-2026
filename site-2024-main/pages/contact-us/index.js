import { Fragment } from 'react';
import Content from '@/content';
import Head from 'next/head';
import Bubble from '@/bubble';
import Button from '@/button';
import SponsorCard from '@/sponsor-card';
import MeetTheCommittee from 'pages/about-us/meet-the-committee';
import Section from '@/section';


const CONTACTS = [{
	title: "Director of Advancement",
	email: "eoh-advancement@ec.illinois.edu"
}, {
	title: "Director of Corporate",
	email: "eoh-corporate@ec.illinois.edu"
}, {
	title: "Director of Exhibits",
	email: "eoh-exhibits@ec.illinois.edu"
}, {
	title: "Director of Facilities",
	email: "eoh-facilities@ec.illinois.edu"
}, {
	title: "Director of High School Design",
	email: "eoh-hsdc@ec.illinois.edu"
}, {
	title: "Director of Hospitality",
	email: "eoh-hospitality@ec.illinois.edu"
}, {
	title: "Director of Judging & Awards",
	email: "eoh-judging@ec.illinois.edu"
}, {
	title: "Director of Marketing",
	email: "eoh-marketing@ec.illinois.edu"
}, {
	title: "Director of Middle School Design",
	email: "eoh-msdc@ec.illinois.edu"
}, {
	title: "Director of Outreach",
	email: "eoh-outreach@ec.illinois.edu"
}, {
	title: "Secretary/Treasurer",
	email: "eoh-treasurer@ec.illinois.edu"
}, {
	title: "Director of Special Events",
	email: "eoh-events@ec.illinois.edu"
}, {
	title: "Director of Startup Showcase",
	email: "eoh-startup@ec.illinois.edu"
}, {
	title: "Director of Technology",
	email: "eoh-tech@ec.illinois.edu"
}, {
	title: "Director of Traffic & Safety",
	email: "eoh-safety@ec.illinois.edu"
}, {
	title: "Visitor's Information",
	email: "eoh-visitors@ec.illinois.edu"
}]

export default function ContactUsPage() {
	return (
		<Fragment>
			<Content title="Contact Us">
				<div className=" mb-10">
					<p className="text-center font-montserrat">
						If you have any questions or concerns regarding Engineering Open House 2025,
						<br />
						please contact the most appropriate director for your matter.
						<br />
						<br />
						If you are not sure which director to contact, please email{' '}
						<span className="font-montserrat text-blue-600 hover:text-blue-900 font-semibold">
							<a href="mailto:eoh@ec.illinois.edu">eoh@ec.illinois.edu</a>
						</span>.
					</p>
				</div>
				<div className="mt-2 mb-10 flex flex-wrap justify-center gap-3 w-full">
					{CONTACTS.map(c =>
						<div className='md:p-4 text-sm md:text-base' key={c.email}>
							<p className="font-montserrat font-bold mx-auto">{c.title}</p>
							<a href="mailto:eoh-advancement@ec.illinois.edu" className='font-montserrat text-blue-800 hover:text-blue-900'>{c.email}</a>
						</div>
					)}
				</div>
			</Content>
			<Section title="Committee Members" color="white" wide>
				<MeetTheCommittee />
			</Section>
		</Fragment>
	);
}
