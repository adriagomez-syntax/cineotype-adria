interface InputProps {
	type?: string
	className?: string
}

export default function Input({ type = "text", className = "" }: InputProps ) {
	return (
		<input
			className={`${className} `}
			type={ type }
		/>
	)
}