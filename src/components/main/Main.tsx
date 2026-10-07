import { useState } from "react"
import useMovieSearch from "../../hooks/useMovieSearch"
import Loader from "../common/Loader"
import ShowError from "../common/ShowError"
import Content from "./Content"
import SearchBar from "./SearchBar"

export default function Main() {
	
	const [query, setQuery] = useState("")
	const { movies, totalResults, currentPage, totalPages, loading, error, setPage } = useMovieSearch(query)

	function onSearch(newQuery: string) {
		setPage(1)
		setQuery(newQuery)
	}

	return (
		<main className="flex-1 flex flex-col gap-4 p-4">
			<SearchBar onSearch={ onSearch } />
			{loading
				? <Loader />
				: error
					? <ShowError error={ error } />
					: <Content
						query={ query }
						movies={ movies }
						totalResults={ totalResults }
						currentPage={ currentPage }
						totalPages={ totalPages }
						setPage={ setPage }
					/>
			}
		</main>
	)
}