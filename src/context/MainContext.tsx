import { createContext, useContext } from "react";
import type { Movie } from "../types/movie";

type MainContextType = {
	query: string
	movies: Movie[]
}

export const MainContext = createContext<MainContextType | undefined>(undefined)

export function useMainContext(): MainContextType {
	const context = useContext(MainContext)

	if (typeof context === "undefined") {
		throw new Error("MainContext must be used within a MainProvider")
	}

	return context
}