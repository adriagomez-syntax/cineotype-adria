import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useFavoritesContext } from "../../context/FavoritesContext";
import Button from "../common/Button";

export default function Favorites() {
	
	const { favorites } = useFavoritesContext()

	return (
		<div className="relative py-1 px-2">
			<Button className="group flex">
				<FaHeart className="hidden group-hover:inline text-accent-2" />
				<FaRegHeart className="group-hover:hidden" />
			</Button>
			<span className="absolute px-1 right-0 top-0 bg-accent-1 shadow shadow-accent-3 rounded-full text-2xs">{favorites.length}</span>
		</div>
	)
}