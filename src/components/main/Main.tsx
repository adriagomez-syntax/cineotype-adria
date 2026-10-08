import { useState } from "react"
import useMovieSearch from "../../hooks/useMovieSearch"
import Loader from "../common/Loader"
import ShowError from "../common/ShowError"
import Content from "./Content"
import SearchBar from "./SearchBar"
import Modal from "../common/Modal"
import SidebarMenu from "../common/SidebarMenu"
import MovieDetails from "./details/MovieDetails"
import useMovie from "../../hooks/useMovie"

export default function Main() {
	
	const [query, setQuery] = useState("")
	const { movies, totalResults, currentPage, totalPages, loading, error, setPage } = useMovieSearch(query)
	const [openModal, setOpenModal] = useState(false)
	const [idMovie, setIdMovie] = useState<number | null>(null)
	const { movie, errorMovie } = useMovie(idMovie)

	function onSearch(newQuery: string) {
		setPage(1)
		setQuery(newQuery)
	}

	function selectMovie(id: number) {
		setIdMovie(id)
		setOpenModal(true)
	}

	return (
		<main className="flex-1 flex flex-col gap-4 p-4 md:px-16 md:py-8">
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
						setSelected={ selectMovie }
					/>
			}
			<SidebarMenu
				direction="bottom"
				open={ openModal }
				setOpen={ setOpenModal }
				className="md:hidden"
			>
				<MovieDetails
					movie={ movie}
					error={ errorMovie }
					setOpen={ setOpenModal }
				/>
			</SidebarMenu>
			<Modal
				open={ openModal }
				setOpen={ setOpenModal }
				className="hidden md:block"
			>
				<MovieDetails
					movie={ movie }
					error={ errorMovie }
					setOpen={ setOpenModal }
				/>
			</Modal>
		</main>
	)
}