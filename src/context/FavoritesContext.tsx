import { createContext, useContext, type Dispatch, type SetStateAction } from "react";
import type { Movie } from "../types/movie";

type FavoritesContextType = {
	favorites: Movie[],
	setFavorites: Dispatch<SetStateAction<Movie[]>>
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export function useFavoritesContext(): FavoritesContextType {
	const context = useContext(FavoritesContext)

	if (typeof context === "undefined") {
		throw new Error("useFavorites must be used within a FavoritesProvider")
	}

	return context
}