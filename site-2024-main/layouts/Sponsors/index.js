export default function Sponsors() {

	const STRIPE_DONATE_LINK = 'https://buy.stripe.com/7sIg2U042455aT6000'
	const UIF_SPONSOR_LINK = '/sponsor-us' // /sponsor-us

	return (
		<>
			<div className="flex flex-col items-center">
				<p className="text-center font-montserrat my-5 text-lg px-3">Engineering Open House would not be possible without our generous patrons. <br /> Thank you for your contributions.</p>
				<div className="flex flex-col md:flex-row justify-between md:w-3/5 gap-5">
					<div className="flex flex-col items-center">
						<div className="font-montserrat text-lg md:text-2xl text-center bg-theme-teal p-2 rounded-md bg-opacity-80">I'm a<br />
							<h1 className="text-2xl lg:text-3xl md:pt-2">Student or Visitor</h1>
						</div>
						<a className="bg-theme-grey hover:bg-yellow-300 p-3 pb-4 rounded-full w-64 font-montserrat text-2xl md:text-3xl mt-2 md:mt-6 text-center" href={STRIPE_DONATE_LINK}> 
							Donate
						</a>
						<p>via Stripe</p>
					</div>
					<div className="flex flex-col items-center">

						<div className="font-montserrat text-lg md:text-2xl text-center bg-theme-teal p-2 rounded-md bg-opacity-80">
							I'm a <br />
							<h1 className="text-2xl lg:text-3xl md:pt-2">Company Representative</h1>
						</div>
						<a className="bg-theme-purp hover:bg-purple-400 p-3 pb-4 rounded-full w-64 font-montserrat text-2xl md:text-3xl mt-2 md:mt-6 text-center" href={UIF_SPONSOR_LINK} >
							Sponsor
						</a>
						<p>via UIF</p>
					</div>
                </div>
			</div>
		</>
	)
}
