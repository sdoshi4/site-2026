import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Card from '@/card';
import Paginate from '@/paginate';
import { Component } from 'react';
import { getHost } from '@utilities/host';
import Button from '@/button';

const items = [
	<img className={`pl-2 pr-2`} src="assets/icons/blinkie.png" />,
	<img className={`pl-2 pr-2`} src="assets/icons/espldemo.png" />,
	<img className={`pl-2 pr-2`} src="assets/icons/estar.png" />,
	<img className={`pl-2 pr-2`} src="assets/icons/jumplab.png" />,
	<img className={`pl-2 pr-2`} src="assets/icons/keynote.png" />,
	<img className={`pl-2 pr-2`} src="assets/icons/kimlab.png" />,
	<img className={`pl-2 pr-2`} src="assets/icons/labescape.png" />,
	<img className={`pl-2 pr-2`} src="assets/icons/lego.png" />,
	<img className={`pl-2 pr-2`} src="assets/icons/ncsa.png" />,
	<img className={`pl-2 pr-2`} src="assets/icons/physicsvan.png" />,
	<img className={`pl-2 pr-2`} src="assets/icons/prospectivestu.png" />,
	<img className={`pl-2 pr-2`} src="assets/icons/rubegoldberg.png" />,
	<img className={`pl-2 pr-2`} src="assets/icons/tesla.png" />,
	<img className={`pl-2 pr-2`} src="assets/icons/whatiwishhs.png" />,
	<img className={`pl-2 pr-2`} src="assets/icons/wiepanel.png" />,
	<img className={`pl-2 pr-2`} src="assets/icons/windtunnel.png" />
];

export default class EOHEvents extends Component {
	constructor(props) {
		super(props);

		this.state = {
			startups: []
		};
	}

	componentDidMount() {
		if (!this.state.startups.length) {
			fetch(getHost() + '/assets/data/startups.json', {
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				}
			})
				.then((response) => response.json())
				.then((result) => this.setState({ startups: result }));
		}
	}

	render() {
		return (
			<div>
				{/*<Carousel
				autoPlay
				showThumbs={true}
				swipeable
				useKeyboardArrows
				autoFocus
				interval={3000}
				infiniteLoop
				centerMode
				centerSlidePercentage={33.3}
				className="max-w-lg mx-auto mb-5"
			>
				<img src="assets/icons/blinkie.png" />
				<img src="assets/icons/espldemo.png" />
				<img src="assets/icons/estar.png" />
				<img src="assets/icons/jumplab.png" />
				<img src="assets/icons/keynote.png" />
				<img src="assets/icons/kimlab.png" />
				<img src="assets/icons/labescape.png" />
				<img src="assets/icons/lego.png" />
				<img src="assets/icons/majors.png" />
				<img src="assets/icons/ncsa.png" />
				<img src="assets/icons/physicsvan.png" />
				<img src="assets/icons/prospectivestu.png" />
				<img src="assets/icons/rubegoldberg.png" />
				<img src="assets/icons/tesla.png" />
				<img src="assets/icons/whatiwishhs.png" />
				<img src="assets/icons/wiepanel.png" />
    </Carousel>*/}
				{/* <div className="w-64 mx-auto lg:w-auto">
					<AliceCarousel
						keyboardNavigation
						autoPlay
						autoPlayInterval={1500}
						infinite
						disableButtonsControls
						items={items}
						responsive={{
							0: {
								items: 1
							},
							1024: {
								items: 3,
								itemsFit: 'contain'
							}
						}}
					/>
				</div> */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-5 mt-10">
					<Card key={'High School Design Competition'} title={'High School Design Competition'}>
						The High School design competition showcases engineering design models from high school students
						every year!
					</Card>
					<Card key={'Middle School Design Competition'} title={'Middle School Design Competition'}>
						<div>
							The High School design competition showcases engineering design models from middle school students
							every year!
						</div>
					</Card>
					<Card key={'Robobrawl'} title={'Robobrawl'}>
						<img src="/assets/images/robobrawl2.png" className="rounded-full w-40 ml-5 mb-5 float-right" />
						Are you ready for Robobrawl 2023? Join us on the Bardeen Quad for an exciting combat robotics
						showcase with two simultaneous competitions of 1lb and 30lb robots! With our biggest bracket
						yet—watch robots duke it out at the arena or on our{' '}
						<a
							className="underline text-blue-300 hover:text-blue-400 visited:text-purple-300"
							href="https://www.twitch.tv/robobrawl"
						>
							Twitch livestream
						</a>{' '}
						and{' '}
						<a
							className="underline text-blue-300 hover:text-blue-400 visited:text-purple-300"
							href="https://www.youtube.com/@robobrawl"
						>
							Youtube Livestream
						</a>{' '}
						. No tickets necessary!
					</Card>
					<Card key={'EOH 2023 Keynote Speaker'} title={'EOH 2023 Keynote Speaker'}>
						<img
							src="/assets/images/1618254727328.jpg"
							className="rounded-full w-40 ml-5 mb-5 float-right"
						/>
						Join us on the CIF monumental steps at 4 on Saturday (or online at{' '}
						<a href="https://www.twitch.tv/eohillinois">https://www.twitch.tv/eohillinois</a>) for our
						keynote speaker to kick off EOH 2023! Our keynote speaker this year is Todd Little who is the
						chief architect at Oracle and an Alumni of The Grainger College of Engineering. With more than
						40 years of software architecture and development experience, he has also received two patents
						for methods allowing design patterns in a UML modeling tool to control the generation of
						software artifacts.
					</Card>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-1 gap-x-5 gap-y-5 mt-5">
					<Card key={'Startup Showcase'} title={'Startup Showcase'}>
						The Startup Showcase, sponsored by{' '}
						<a
							className="underline text-blue-300 hover:text-blue-400 visited:text-purple-300"
							href="http://iventure.illinois.edu/"
						>
							iVenture Accelerator
						</a>, is dedicated to celebrating student entrepreneurs! Come see what our inventive Illinois
						students have been working on at their booths and experience demos, giveaways, and much more!{' '}
						<br />
						<br /> The Startup Showcase is located at the CIF Monumental Steps on Friday 11-11:30, 12-12:30,
						2-2:30, 3-3:30 pm. The Startup Showcase pitch competition is a rapid-fire session where our 20+
						teams will explain what they’ve been working on, and try to sell you on it!
						<br />
						<br />
						<div className="mx-auto text-center">
							<Button
								type="big"
								className="px-4 rounded-none drop-shadow-md"
								href="https://drive.google.com/file/d/1HI_xzuiPWXFFG1KRXX9NaKNT2Nfmz-cj/view?usp=share_link"
								target="_blank"
							>
								Startup Showcase Guide
							</Button>
						</div>
						<br />
						<br />
						<span className="font-bold text-theme-red">
							Check out our participating startups here (click to see team members, urls/emails, and a
							description):
						</span>
						<br />
						<br />
						<Paginate
							thin
							center
							items={this.state.startups}
							onClick={() => { }}
							lg_cols={4}
							lg_rows={2}
							sm_cols={3}
							lg_at={1024}
						/>
					</Card>
					<Card key={'Startup Showcase Keynote Speaker'} title={'Startup Showcase Keynote Speaker'}>
						<img
							src="/assets/images/1674587618970.jpeg"
							className="rounded-full w-48 mr-5 mt-5 mb-5 float-left"
						/>
						At twenty-four years old, Pierre is the founder and CEO of We Hear You®. Pierre believes that he
						brings both compassion and a unique worldview to everything the company does. Pierre was born in
						Brazil, then moved to Guyana, before moving to the US when he was a child. Pierre faced extreme
						xenophobia, racism, and poverty at a young age. Through it all, he decided to perfect his
						English and public speaking ability in order to someday be a voice for those who need help. When
						he is not working on We Hear You®, Pierre works part-time as the Director of Development for the
						United States Association for Small Business and Entrepreneurship, in the Accessibility office
						at Bradley, and travels the USA leading Diversity and Inclusion training for organizations.
						Additionally, he volunteers as a mentor for students, hands out food at a local food pantry,
						gives public speaking lessons to people in the community, and creates educational history videos
						for his local PBS station. His experiences have instilled a compassionate and giving spirit
						within him that is his drive. Pierre’s drive to consistently work toward a better future coupled
						with his educational background and ability to articulate the cause and motivate people is a
						quality unique to him. Helping others prosper is ingrained in his DNA and he tries to bring that
						to everything he does.
						<br />
						<br />
						<span className="text-theme-red font-bold">
							Please join us at 12 pm on the CIF Monumental Steps to hear Pierre!
						</span>
					</Card>
					<Card key={'Dyson Tech Talk'} title={'Dyson Tech Talk'}>
						On Friday, March 31 from 1:00pm-2:00pm CT, join Dyson engineers for an info session and Q+A on
						their James Dyson Award. During the session, you will hear an overview of Dyson’s design process
						and tips for what makes a winning entry to their annual engineering competition, the James Dyson
						Award.
						<br />
						<br />
						Due to the weather, we are offering a virtual option for the James Dyson Award Info Session.
						Link below:
						<div className="mx-auto text-center">
							<Button
								type="big"
								className="px-4 rounded-none drop-shadow-md"
								href="https://urldefense.com/v3/__https://teams.microsoft.com/l/meetup-join/19*3ameeting_NzI3ZjBjNWQtZDc5Ny00MmM0LThhY2ItOTM4OTUwNDZjN2Yw*40thread.v2/0?context=*7b*22Tid*22*3a*22b6e8236b-ceb2-401d-9169-2917d0b07d48*22*2c*22Oid*22*3a*2247e31865-15da-4c7d-9907-8f499c62b0d1*22*7d__;JSUlJSUlJSUlJSUlJSUl!!DZ3fjg!-nGj5GQpwnjORmD5fxkewnRK5Cpkve4T4HL2fUUBopx0G1qvcu-rYnXeYowfKOsqaKQ0PWR2yKGZItZGGrw2O0OK_0HDKUYpoiVi$"
								target="_blank"
							>
								Dyson Tech Talk
							</Button>
						</div>
					</Card>
				</div>
			</div>
		);
	}
}
