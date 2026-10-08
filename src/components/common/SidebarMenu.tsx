import type { ReactNode } from "react"

type Props = {
	direction?: "left" | "right" | "top" | "bottom"
	open: boolean
	setOpen: (open: boolean) => void
	className?: string
	children?: ReactNode
}

export default function SidebarMenu({ direction = "left", open, setOpen, className = "", children }: Props) {
	
	const directions = {
		left: { open: "translate-x-0", close: "-translate-x-full", position: "top-0 left-0", dimensions: "h-full min-w-40 max-w-50", child_dimensions: "h-full" },
		right: { open: "translate-x-0", close: "translate-x-full", position: "top-0 right-0", dimensions: "h-full min-w-40 max-w-50", child_dimensions: "h-full" },
		top: { open: "translate-y-0", close: "-translate-y-full", position: "top-0 left-0", dimensions: "w-full min-h-40 max-h-[90vh]", child_dimensions: "h-full w-full" },
		bottom: { open: "translate-y-0", close: "translate-y-full", position: "bottom-0 left-0", dimensions: "w-full min-h-40 max-h-[90vh]", child_dimensions: "h-full w-full" }
	}

	const directionObj = directions[direction]
	
	return (
		<div className={`${className} ${open ? "visible opacity-100" : "invisible opacity-0"} fixed inset-0 z-100 transition`}>
			<div className="absolute inset-0 bg-black/30" onClick={ () => setOpen(false) } />
			<div className={`${open ? directionObj.open : directionObj.close} ${directionObj.position} ${directionObj.dimensions} absolute flex flex-col transform transition-transform ease-in-out duration-300`}>
				<div className={`flex-1 flex flex-col ${directionObj.child_dimensions} bg-background-mid`}>
					{ children }
				</div>
			</div>
		</div>
	)
}