import Card from '@/card';
import Modal from '@/modal';
import React, { Fragment, useState } from 'react';

export default function PaginateItem({
	times,
	urls,
	color,
	shortTimes,
    rsoName,
	event,
	location,
    locationLong,
	onClickArg,
	descriptionShort,
	descriptionLong,
	onClick,
	thin,
	thick,
	tag1,
	tag2,
	tag3
}) {
	const [ open, setOpen ] = useState(false);
	const [ modalOpen, setModalOpen ] = useState(false);

	const fullOnClick = (e) => {
		setOpen(!open);
		if (onClick) onClick(onClickArg || location);
	};

	// if (!event) return <div />;

    console.log(location, locationLong)

	return (
		<Fragment>
			<div
				className={`bg-white shadow-lg p-5 ${thin ? "h-18" : "h-32"} font-roboto font-light hover:cursor-pointer overflow-hidden`}
				onClick={(e) => {
					onClick && onClick(onClickArg || location);
					setModalOpen(true);
				}}
			>
                <div className="line-clamp-3 text-sm font-medium">{event || rsoName}</div>
                {location && <div className="truncate text-xs">at {location}</div>}
                {rsoName && <div className="truncate text-xs">by {rsoName}</div>}
			</div>
			{modalOpen && (
				<Modal
					event={event || rsoName}
					description={descriptionShort}
					descriptionLong={descriptionShort}
					urls={urls}
					times={times}
					location={locationLong}
					tag1={tag1}
					tag2={tag2}
					tag3={tag3}
					rsoName={rsoName}
					goAway={() => setModalOpen(false)}
				/>
			)}
		</Fragment>
	);
}
