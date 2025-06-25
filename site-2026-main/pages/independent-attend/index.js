import Content from '@/content';
import Button from '@/button';

export default function IndepAttend() {
	return (
		<Content title="Independent Attendance">
			<div className="lg:flex">
				<div className="lg:col-span-3 mb-10">
					<p className="text-center font-montserrat">
						EOH 2023 is an open house, so if you are attending independently (ie. not part of field trip)
                        <br/>
                        <span className='font-bold'>no EOH 2023 registration is necessary!</span>
					</p>
					<br/>
					<p className="text-center font-montserrat">
						Just show up to EOH 2023 and attend our events. We are excited to see you there!
					</p>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<p className="text-center font-montserrat">
						*Some events (like LabEscape) may require prior registration in order to reserve a spot, so please check our <a className='underline font-bold' href="/#special-events">Special Events tab</a> for information.
					</p>
				</div>
			</div>
		</Content>
	);
}
