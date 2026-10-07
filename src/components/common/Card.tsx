import type { ReactNode } from "react"

type Props = {
	className?: string
	children?: ReactNode
}

export default function Card({ className = "", children }: Props) {
	return (
		<div className={`${className} bg-background-mid rounded-md shadow shadow-background-dark`}>
			{ children }
		</div>
	)
}