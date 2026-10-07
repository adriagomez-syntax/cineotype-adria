import ErrorClass from "../assets/ErrorClass";
import { searchMovies } from "../services/tmdb";
import type { Movie } from "../types/movie";
import { useEffect, useState } from "react";

export default function useMovieSearch(query: string) {
	const [movies, setMovies] = useState<Movie[]>([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<ErrorClass | null>(null)

	useEffect(() => {
		async function load() {
			if (query.trim() === "") { 
				setMovies([])
				return 
			}

			setLoading(true)
			setError(null)

			try {
				const results = await searchMovies(query)
				setMovies(results)
			} catch(err: unknown) {
				setError(err instanceof ErrorClass ? err
					: err instanceof Error ? new ErrorClass({ title: "Error", message: err.message }) 
						: new ErrorClass({ title: "Error", message: "Unbekannter Fehler" })
				)
			} finally {
				setLoading(false)
			}
		}

		load()
	}, [query])

	return { movies, loading, error }
}