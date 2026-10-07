import { FaSearch } from "react-icons/fa";
import Input from "../common/Input";
import { useDebounce } from "../../hooks/useDebounce";
import { useEffect, useState } from "react";
//import Button from "../common/Button";

type SearchBarProps = {
	onSearch: (query: string) => void
}

export default function SearchBar({ onSearch } : SearchBarProps) {
	
	const [inputValue, setInputValue] = useState("")
	const debounced = useDebounce(inputValue.trim())

	useEffect(() => 
		onSearch(debounced)
	
	// eslint-disable-next-line react-hooks/exhaustive-deps
	, [debounced])
	
	/*function handleSubmit(event: React.SubmitEvent) {
		event.preventDefault()

		onSearch(inputValue.trim())
	}*/

	return (
		<form 
			className="flex gap-4 md:mx-60"
			//onSubmit={ handleSubmit }
		>
			<Input
				className="flex-1"
				icon={ FaSearch }
				value={ inputValue }
				onChange={ setInputValue }
			/>
			{/*<Button
				className="bg-background-mid rounded-full px-3"
				type="submit"
			>
				<FaSearch className="text-primary" />
			</Button>*/}
		</form>
	)
}