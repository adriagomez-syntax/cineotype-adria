import { createContext, useContext } from "react";
import type { Movie } from "../types/movie";

type FavoritesContextType = {
	favorites: Movie[],
	isFavorite: (id: number) => boolean
	toggleFavorite: (movie: Movie) => void
	removeFavorite: (id: number) => void
	clearFavorites: () => void
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export function useFavoritesContext(): FavoritesContextType {
	const context = useContext(FavoritesContext)

	if (typeof context === "undefined") {
		throw new Error("useFavorites must be used within a FavoritesProvider")
	}

	return context
}