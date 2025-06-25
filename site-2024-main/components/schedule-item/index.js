import Modal from '@/modal';
import React, { Fragment, useState } from 'react';

export default function ScheduleItem({
	times,
	urls,
	color,
	shortTimes,
	event,
	location,
	onClickArg,
	description,
	descriptionLong,
	onClick,
	thin,
	thick
}) {
	const [ open, setOpen ] = useState(false);
	const [ modalOpen, setModalOpen ] = useState(false);

	const fullOnClick = (e) => {
		setOpen(!open);
		if (onClick) onClick(onClickArg || location);
	};

	return (
		<Fragment>
			<div
				className={`text-right relative hover:cursor-pointer overflow-hidden`}
				onClick={(e) => {
					onClick && onClick(onClickArg || location);
					setModalOpen(true);
				}}
			>
				{/* <span className="absolute top-2 right-2 text-xs italic">Click to Expand</span> */}
				<span className="text-center lg:text-right py-2 lg:py-0 text-sm font-semibold line-clamp-3 text-white">
					{event}
					<span className="hidden lg:inline-block">&nbsp;•&nbsp;</span>
					<span className="block lg:hidden">
					</span>
					<span className="text-xs text-white">{shortTimes}</span>
					<span className="block lg:hidden text-xs">at {location}</span>
				</span>
				{/* <span className="text-xs">{location}</span> */}
				{/* {times && <span className="absolute top-5 right-2 text-right text-sm text-gray-600 block">{times}</span>} */}

				{description && (
					<div className={`text-left ${open ? 'block' : 'hidden'}`}>
						<span className="text-xs" dangerouslySetInnerHTML={{ __html: description }} />
					</div>
				)}
			</div>
			{modalOpen && (
				<Modal
					event={event}
					description={description}
					descriptionLong={descriptionLong}
					urls={urls}
					times={times}
					location={location}
					goAway={() => setModalOpen(false)}
				/>
			)}
			{/* <div
				className={`text-center relative rounded-lg font-font-montserrat mb-5 bg-white p-4 shadow-md pt-8 ${thin
					? 'h-28'
					: thick ? 'h-48' : 'h-32'} transition hover:shadow-lg hover:cursor-pointer`}
				onClick={(e) => {
					onClick && onClick(onClickArg || location);
					setModalOpen(true);
				}}
			>
				<span className="absolute top-2 right-2 text-xs italic">Click to Expand</span>
				<span className="text-sm font-semibold line-clamp-3">{event}</span>
				<span className="text-xs">{location}</span>
				{times && <span className="text-sm text-gray-600 block mx-4">{times}</span>}

				{description && (
					<div className={`text-left ${open ? 'block' : 'hidden'}`}>
						<span className="text-xs" dangerouslySetInnerHTML={{ __html: description }} />
					</div>
				)}
			</div>
			{modalOpen && (
				<Modal
					event={event}
					description={description}
					descriptionLong={descriptionLong}
					urls={urls}
					times={times}
					location={location}
					goAway={() => setModalOpen(false)}
				/>
			)} */}
		</Fragment>
	);
}
