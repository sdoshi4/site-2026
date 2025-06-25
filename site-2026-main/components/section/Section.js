import { Fragment } from 'react';

export default function Section({ color, title, wide, children, id }) {
	const bgColor = color === undefined ? 'bg-transparent' : color;
	const textColor = color === 'theme' ? 'text-white' : 'text-primary-brown';
	// const width = wide ? 'w-10/12 lg:w-4/4' : 'w-10/12 lg:w-3/4 max-w-screen-xl';

	return (
		<div className={`w-full ${bgColor} relative lg:py-5 md:py-3 py-1`}>
			<div className="absolute -top-24 lg:-top-20" id={id}></div> {/* So that the scroll goes to the right place */}
			<div className={`flex flex-col justify-center mx-auto grad pb-5`}>
				{title && <h2 className={`${textColor} text-3xl mt-5 font-bold mx-auto font-montserrat`}>{title}</h2>}
				{title && <hr className="my-5 w-16 mx-auto" />}
				{children}
			</div>
		</div>
	);
}
