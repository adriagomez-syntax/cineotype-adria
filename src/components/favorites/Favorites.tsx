import { useFavoritesContext } from "../../context/FavoritesContext";
import { useMenuContext } from "../../context/MenuContext";
import FavoriteButton from "../common/FavoriteButton";

export default function Favorites() {
	
	const { favorites } = useFavoritesContext()
	const { toggleFavorites } = useMenuContext()

	return (
		<div className="relative py-1 px-2">
			<FavoriteButton onClick={ () => toggleFavorites() } />
			<span className="absolute px-1 right-0 top-0 bg-accent-1 shadow shadow-accent-3 rounded-full text-2xs">{favorites.length}</span>
		</div>
	)
}