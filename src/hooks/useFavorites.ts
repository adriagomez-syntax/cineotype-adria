import type { Movie } from "../types/movie"
import useLocalStorage from "./useLocalStorage"

export default function useFavorites() {

	const [favorites, setFavorites] = useLocalStorage<Movie[]>("favorites", [])

	function isFavorite(id: number) {
		const findMovie = favorites.find(elem => elem.id === id)

		return typeof findMovie !== "undefined"
	}

	function addFavorite(movie: Movie) {
		setFavorites([...favorites, movie])
	}

	function removeFavorite(id: number) {
		setFavorites(favorites.filter(item => item.id !== id))
	}

	function toggleFavorite(movie: Movie) {
		const findMovie = isFavorite(movie.id)

		if (findMovie) {
			removeFavorite(movie.id)
		} else {
			addFavorite(movie)
		}
	}

	function clearFavorites() {
		setFavorites([])
	}

	return { favorites, isFavorite, removeFavorite, toggleFavorite, clearFavorites }
}