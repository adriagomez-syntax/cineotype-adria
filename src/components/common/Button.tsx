import type { ReactNode } from "react"

type Props = {
	type?: "button" | "submit"
	onClick?: () => void
	disabled?: boolean
	className?: string
	children?: ReactNode
}

export default function Button({ type = "button", onClick, disabled = false, className = "", children }: Props) {
	return (
		<button
			className={`${className} cursor-pointer disabled:cursor-not-allowed not-disabled:hover:opacity-80 transform not-disabled:active:scale-105 duration-300`}
			type={ type }
			onClick={ onClick }
			disabled={ disabled }
		>
			{ children }
		</button>
	)
}