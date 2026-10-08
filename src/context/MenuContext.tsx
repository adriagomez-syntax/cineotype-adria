import { createContext, useContext } from "react";

type MenuContextType = {
	toggleFavorites: () => void
	selectMovie: (id: number) => void
}

export const MenuContext = createContext<MenuContextType | undefined>(undefined)

export function useMenuContext(): MenuContextType {
	const context = useContext(MenuContext)

	if (typeof context === "undefined") {
		throw new Error("useFavorites must be used within a FavoritesProvider")
	}

	return context
}