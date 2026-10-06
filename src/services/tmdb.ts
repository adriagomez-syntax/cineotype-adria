import type { Movie, SearchResponse, MovieDetails } from "../types/movie";
import type { TmdbHttpError } from "../types/error";
import { TmdbError } from "../assets/TmdbError";

const BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

export async function searchMovies(query: string): Promise<Movie[]> {
	const url = `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}&api_key=${API_KEY}`

	const response = await fetch(url)
	if (!response.ok) {
		throw new Error(`TMDB-Fehler: ${response.status}`)
	}

	const data: SearchResponse = await response.json()
	return data.results
}

export async function getMovie(id: number): Promise<MovieDetails> {
	const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`

	const response = await fetch(url)
	if (!response.ok) {
		const errorResp: TmdbHttpError = await response.json()
		const error = new TmdbError(errorResp.status_code)
		throw new Error(`TMDB-Fehler: ${error.errorMessage}`)
	}

	const data: MovieDetails = await response.json()
	return data
}

export function posterUrl(path: string | null, size = "w500"): string {
	if (!path) { return "/placeholder.svg" }
	return `https://image.tmdb.org/t/p/${size}${path}`
}