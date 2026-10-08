import type { ReactNode } from "react"

type Props = {
	open: boolean
	setOpen: (open: boolean) => void
	className?: string
	children?: ReactNode
}

export default function Modal({ open, setOpen, className = "", children }: Props) {
	return (
		<div className={`${className} ${open ? "visible opacity-100" : "invisible opacity-0"} fixed inset-0 z-100 transition`}>
			<div className="absolute inset-0 bg-black/30" onClick={ () => setOpen(false) } />
			<div className={`${open ? "scale-100" : "scale-0"} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[80vw] min-h-40 absolute flex flex-col transform transition-transform ease-in-out duration-300`}>
				<div className="flex flex-col h-full w-full bg-background-mid p-4 rounded-md">
					{ children }
				</div>
			</div>
		</div>
	)
}