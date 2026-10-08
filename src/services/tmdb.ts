import type { SearchResponse, MovieDetails } from "../types/movie";
import type { TmdbHttpError } from "../types/error";
import { TmdbError } from "../assets/TmdbError";
import { env } from "../libs/mockEnv";

const BASE_URL = env.VITE_PROXY_URL

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
		const errorResp: TmdbHttpError = await response.json() as TmdbHttpError
		throw new TmdbError(response.status, errorResp.status_message)
	}

	const data: T = await response.json() as T
	return data
}

export function posterUrl(path: string | null, size = "w500"): string {
	if (!path) { return "/placeholder.svg" }
	return `https://image.tmdb.org/t/p/${size}${path}`
}