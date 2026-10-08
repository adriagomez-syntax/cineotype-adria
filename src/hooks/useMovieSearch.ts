import ErrorClass from "../assets/ErrorClass";
import { searchMovies } from "../services/tmdb";
import type { Movie } from "../types/movie";
import { useEffect, useState } from "react";

export default function useMovieSearch(query: string) {
	const [movies, setMovies] = useState<Movie[]>([])
	const [totalResults, setTotalResults] = useState(0)
	const [currentPage, setCurrentPage] = useState(1)
	const [totalPages, setTotalPages] = useState(0)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<ErrorClass | null>(null)

	function setPage(page: number) {
		setCurrentPage(prev => page < 1 || page > totalPages ? prev : page)
	}

	useEffect(() => {
		let ignore = false
		
		async function load() {
			
			if (ignore) { return }

			if (!ignore) {
				setError(null)
			}
			
			if (!ignore && query.trim() === "") { 
				setMovies([])
				setTotalPages(0)
				setTotalResults(0)
				return 
			}

			if (!ignore) {
				setLoading(true)
			}

			try {
				const results = await searchMovies(query, currentPage)
				if (!ignore) { 
					setMovies(results.results)
					setTotalResults(results.total_results)
					setTotalPages(results.total_pages)
				}
			} catch(err: unknown) {
				if (!ignore) {
					setError(err instanceof ErrorClass ? err
						: err instanceof Error ? new ErrorClass({ title: "Error", message: err.message }) 
							: new ErrorClass({ title: "Error", message: "Unbekannter Fehler" }))
				}
			} finally {
				if (!ignore) { setLoading(false) }
			}
		}

		load()

		return () => { ignore = true; }
	}, [query, currentPage])

	return { movies, totalResults, currentPage, totalPages, loading, error, setPage }
}