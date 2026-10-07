import type { Movie } from "../types/movie"
import useLocalStorage from "./useLocalStorage"

export default function useFavorites() {

	const [favorites, setFavorites] = useLocalStorage<Movie[]>("favorites", [])

	function addFavorite(movie: Movie) {
		const movieFind = favorites.find((item) => item.id === movie.id)

		if (!movieFind) {
			setFavorites([...favorites, movie])
		}
	}

	function removeFavorite(id: number) {
		setFavorites(favorites.filter(item => item.id !== id))
	}

	function clearFavorites() {
		setFavorites([])
	}

	return { favorites, addFavorite, removeFavorite, clearFavorites }
}