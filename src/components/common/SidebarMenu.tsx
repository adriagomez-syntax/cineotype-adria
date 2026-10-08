import type { ReactNode } from "react"

type Props = {
	direction?: "left" | "right" | "top" | "bottom"
	open: boolean
	setOpen: (open: boolean) => void
	position?: string
	dimensions?: string
	className?: string
	children?: ReactNode
}

export default function SidebarMenu({ direction = "left", open, setOpen, position, dimensions, className = "", children }: Props) {
	
	const directions = {
		left: { open: "translate-x-0", close: "-translate-x-full", position: "top-0 left-0", dimensions: "h-full min-w-40 max-w-50", child_dimensions: "h-full" },
		right: { open: "translate-x-0", close: "translate-x-full", position: "top-0 right-0", dimensions: "h-full min-w-40 max-w-50", child_dimensions: "h-full" },
		top: { open: "translate-y-0", close: "-translate-y-full", position: "top-0 left-0", dimensions: "w-full min-h-40 max-h-[90vh]", child_dimensions: "h-full w-full" },
		bottom: { open: "translate-y-0", close: "translate-y-full", position: "bottom-0 left-0", dimensions: "w-full min-h-40 max-h-[90vh]", child_dimensions: "h-full w-full" }
	}

	const directionObj = directions[direction]
	const realDimensions = dimensions ? dimensions : directionObj.dimensions
	const realPosition = position ? position : directionObj.position
	
	return (
		<div className={`${className} ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} fixed inset-0 z-100 transition-opacity`}>
			<div className="absolute inset-0 bg-black/30" onClick={ () => setOpen(false) } />
			<div className={`${open ? directionObj.open : directionObj.close} ${realPosition} ${realDimensions} absolute flex flex-col transform transition-transform ease-in-out duration-300`}>
				<div className={`flex-1 flex flex-col ${directionObj.child_dimensions} bg-background-mid overflow-hidden`}>
					{ children }
				</div>
			</div>
		</div>
	)
}