import type { SearchResponse, MovieDetails } from "../types/movie";
import type { TmdbHttpError } from "../types/error";
import { TmdbError } from "../assets/TmdbError";

const BASE_URL = import.meta.env.VITE_PROXY_URL

export async function searchMovies(query: string, page: number): Promise<SearchResponse> {
	const url = `${BASE_URL}/search?query=${encodeURIComponent(query)}&page=${page}`

	const data = await doRequest<SearchResponse>(url)
	return data
}

export async function getMovie(id: number): Promise<MovieDetails> {
	const url = `${BASE_URL}/movie/${id}`

	const data = await doRequest<MovieDetails>(url)
	return data
}

async function doRequest<T>(url: string): Promise<T> {
	const response = await fetch(url)
	if (!response.ok) {
		const errorResp: TmdbHttpError = await response.json()
		throw new TmdbError(errorResp.status_code)
	}

	const data: T = await response.json()
	return data
}

export function posterUrl(path: string | null, size = "w500"): string {
	if (!path) { return "/placeholder.svg" }
	return `https://image.tmdb.org/t/p/${size}${path}`
}