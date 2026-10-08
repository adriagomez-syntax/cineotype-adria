import type { Dispatch, ElementType, SetStateAction } from "react"
import Button from "./Button"
import { FaXmark } from "react-icons/fa6"

type InputProps = {
	icon?: ElementType
	type?: string
	placeholder?: string
	value: string
	onChange: Dispatch<SetStateAction<string>>
	className?: string
}

export default function Input({ icon, type = "text", placeholder = "", value, onChange, className = "" }: InputProps ) {
	
	const Icon = icon
	
	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		onChange(event.target.value)
	}

	function clearInput() {
		onChange("")
	}

	return (
		<div className={`${className} flex gap-2 justify-between items-center p-2 bg-background-mid rounded-full overflow-hidden`}>
			{Icon && <Icon className="text-primary" />}
			<input
				className="min-w-0 inset-0 flex-1"
				type={ type }
				placeholder={ placeholder }
				value={ value }
				onChange={ handleChange }
			/>
			{value && 
				<Button
					onClick={ clearInput }
				>
					<FaXmark />
				</Button>
			}
		</div>
	)
}