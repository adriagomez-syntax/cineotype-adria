import { searchMovies } from "../services/tmdb";
import type { Movie } from "../types/movie";
import { useEffect, useState } from "react";

export default function useMovieSearch(query: string) {
	const [movies, setMovies] = useState<Movie[]>([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		if (query.trim() === "") { return }

		async function load() {
			setLoading(true)
			setError(null)

			try {
				const results = await searchMovies(query)
				setMovies(results)
			} catch(err: unknown) {
				setError(err instanceof Error ? err.message : "Unbekannter Fehler")
			} finally {
				setLoading(false)
			}
		}

		load()
	}, [query])

	return { movies, loading, error }
}