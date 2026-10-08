import { useState, type ReactNode } from "react";
import FavoritesMenu from "./FavoritesMenu";
import { MenuContext } from "../../context/MenuContext";
import DetailsMenu from "./DetailsMenu";
import useMovie from "../../hooks/useMovie";

type Props = {
	children: ReactNode
}

export default function Menus({ children }: Props) {
	
	// Favorites
	const [openFavorites, setOpenFavorites] = useState(false)
	function toggleFavorites() {
		setOpenFavorites(prev => !prev)
	}

	// Details
	const [idMovie, setIdMovie] = useState<number | null>(null)
	const { movie, errorMovie } = useMovie(idMovie)
	const [openDetails, setOpenDetails] = useState(false)

	function selectMovie(id: number) {
		setIdMovie(id)
		setOpenDetails(true)
	}

	return (
		<>
			<MenuContext value={{ toggleFavorites, selectMovie }}>
				<FavoritesMenu
					open={ openFavorites }
					setOpen={ setOpenFavorites }
				/>
				<DetailsMenu
					movie={ movie }
					error={ errorMovie }
					open={ openDetails }
					setOpen={ setOpenDetails }
				/>
				{ children }
			</MenuContext>
		</>
	)
}