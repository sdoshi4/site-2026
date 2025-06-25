export default function Arrows({ page, total_pages, white, onDecrease, onIncrease, center }) {
	return (
		<div className={`select-none ${center ? "text-center" : "text-left"}`}>
			<img
				src="/assets/ui/caret-left.svg"
				className={`inline-block transition rotate-0 ${page === 0
					? 'opacity-50 pointer-events-none'
					: ''} ${white ? 'invert' : ''}`}
				onClick={onDecrease}
			/>
			<div className={`inline-block text-roboto text-sm ${white ? 'text-white' : 'text-gray-600'} italic`}>
				Page {page + 1} of {total_pages}
			</div>
			<img
				src="/assets/ui/caret-left.svg"
				className={`inline-block transition rotate-180 ${page === total_pages - 1
					? 'opacity-50 pointer-events-none'
					: ''} ${white ? 'invert' : ''}`}
				onClick={onIncrease}
			/>
		</div>
	);
}
