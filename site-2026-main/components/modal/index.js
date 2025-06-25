import { Icon } from "@iconify/react";


export const Modal = ({ open, setOpen, title, children, }) => {
	if (!open) return;
	return (
		<>
			{
				<div className="fixed top-0 right-0 w-screen h-screen bg-blue-400/40 z-30 flex items-center justify-center backdrop-blur-sm"
					onClick={() => setOpen(false)}>
					<div className="bg-white rounded-xl mx-5 w-full md:w-1/2 h-2/3 p-8 overflow-y-auto" onClick={e => e.stopPropagation()}>
						<div className="flex flex-col gap-3">
							<span className="flex flex-row justify-between">
								<h2 className="font-heading text-xl">{title}</h2>
								<button onClick={() => setOpen(false)} aria-label="Close Modal">
									<Icon icon="maki:cross" className="text-2xl" />
								</button>
							</span>
							{children}
						</div>
					</div>
				</div>
			}
		</>
	)
}