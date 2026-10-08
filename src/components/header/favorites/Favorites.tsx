import { useFavoritesContext } from "../../context/FavoritesContext";
import FavoriteButton from "../common/FavoriteButton";

type Props = {
	toggleOpen: () => void
}

export default function Favorites({ toggleOpen }: Props) {
	
	const { favorites } = useFavoritesContext()

	return (
		<div className="relative py-1 px-2">
			<FavoriteButton onClick={ () => toggleOpen() } />
			<span className="absolute px-1 right-0 top-0 bg-accent-1 shadow shadow-accent-3 rounded-full text-2xs">{favorites.length}</span>
		</div>
	)
}