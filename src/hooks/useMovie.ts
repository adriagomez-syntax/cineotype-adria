import { useEffect, useState } from "react";
import type { MovieDetails } from "../types/movie";
import { getMovie } from "../services/tmdb";
import ErrorClass from "../assets/ErrorClass";

export default function useMovie(id: number | null) {
	const [movie, setMovie] = useState<MovieDetails | null>(null)
	const [errorMovie, setErrorMovie] = useState<ErrorClass | null>(null)

	useEffect(() => {
		let ignore = false
		
		async function load() {
			if (ignore) { return }

			if (!ignore) {
				setMovie(null)
				setErrorMovie(null)
			}

			try {
				if (id === null) { return }
				
				const results = await getMovie(id)
				if (!ignore) { 
					setMovie(results)
				}
			} catch(err: unknown) {
				if (!ignore) {
					setErrorMovie(err instanceof ErrorClass ? err
						: err instanceof Error ? new ErrorClass({ title: "Error", message: err.message }) 
							: new ErrorClass({ title: "Error", message: "Unbekannter Fehler" }))
				}
			}
		}

		void load()

		return () => { ignore = true }
	}, [id])

	return { movie, errorMovie }
}