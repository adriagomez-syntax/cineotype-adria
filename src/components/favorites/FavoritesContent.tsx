import { FaHeart, FaTrashAlt } from "react-icons/fa"
import { useFavoritesContext } from "../../context/FavoritesContext"
import Button from "../common/Button"
import FavoriteCard from "./FavoriteCard"

export default function FavoritesContent() {
	
	const { favorites, clearFavorites } = useFavoritesContext()
	
	return (
		<div className="max-h-full flex flex-col gap-4 overflow-hidden">
			<div className="flex justify-between gap-2 items-center p-4 bg-background border-b border-background-dark">
				<div className="flex gap-2 items-center">
					<FaHeart className="size-5 text-accent-2 rounded-md p-1" />
					<div className="flex gap-2 items-center">
						<h1 className="font-secondary text-lg">Meine Favoriten</h1>
						<span className="px-1 text-xs bg-accent-1 rounded-full">{ favorites.length }</span>
					</div>
				</div>
				<Button 
					className="flex gap-2 items-center p-2 bg-background-dark text-2xs rounded-full"
					onClick={ () => clearFavorites() }
				>
					<FaTrashAlt />
					Alle leeren
				</Button>
			</div>
			<ul className="max-h-full flex flex-col gap-2 px-2 pb-4 overflow-scroll">
				{favorites.map(favorite => (
					<FavoriteCard
						key={ favorite.id }
						{...favorite}
					/>
				))}
			</ul>
		</div>
	)
}