import { useState } from "react"
import useMovieSearch from "../../hooks/useMovieSearch"
import Loader from "../common/Loader"
import ShowError from "../common/ShowError"
import Content from "./Content"
import { MainContext } from "../../context/MainContext"
import SearchBar from "./SearchBar"

export default function Main() {
	
	const [query, setQuery] = useState("")
	const { movies, loading, error } = useMovieSearch(query)

	return (
		<main className="flex-1 flex flex-col gap-4 p-4">
			<MainContext value={{ query, movies }}>
				<SearchBar onSearch={ setQuery } />
				{loading
					? <Loader />
					: error
						? <ShowError error={ error } />
						: <Content />
				}
			</MainContext>
		</main>
	)
}