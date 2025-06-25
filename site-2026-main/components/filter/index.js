import Button from '@/button';

export default function Filter({ name, menuItems, current, img_src, color, tags, killTag }) {
	return (
		<div className="mx-auto">
			<div className="flex">
				<div
					className={`hidden sm:flex mx-auto flex-shrink-0 items-center justify-center h-8 w-8 ${color} rounded-full`}
				>
					<img src={img_src} />
				</div>
				<div className="w-full">
					<div className="text-gray-700 text-sm font-light mt-2 w-44 text-left ml-2">{name}:</div>
				</div>
			</div>
			<Button
				type={'menu'}
				className={'ml-0 mt-2 text-left text-xs'}
				style={{ display: 'flex', width: 150, paddingLeft: 9 }}
				menuItems={menuItems}
				width={130}
				thin
				zeroTop
			>
				{current}
			</Button>
		</div>
	);
}
