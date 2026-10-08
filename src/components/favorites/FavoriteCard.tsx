import { FaStar, FaTrashAlt } from "react-icons/fa";
import { printDate } from "../../assets/utils/utils";
import { posterUrl } from "../../services/tmdb";
import type { Movie } from "../../types/movie";
import Button from "../common/Button";
import { useFavoritesContext } from "../../context/FavoritesContext";
import { useMenuContext } from "../../context/MenuContext";

export default function FavoriteCard({ id, poster_path, release_date, title, vote_average}: Movie) {
	
	const { removeFavorite } = useFavoritesContext()
	const { selectMovie } = useMenuContext()
	
	return (
		<li className="min-h-20 max-h-20 max-w-full flex justify-between gap-4 p-2 bg-background shadow shadow-background-dark rounded-md overflow-hidden">
			<div className="flex-1 min-w-0 flex gap-4 justify-start">
				<div className="overflow-hidden rounded-md">
					<img
						className="h-full object-contain cursor-pointer" 
						src={ posterUrl(poster_path) }
						onClick={ () => selectMovie(id) }
					/>
				</div>
				<div className="flex-1 flex flex-col gap-1 overflow-hidden">
					<span className="w-fit bg-background-mid p-1 text-2xs text-secondary rounded-md">{ printDate(release_date) }</span>
					<h1 
						className="font-secondary truncate hover:underline cursor-pointer"
						onClick={ () => selectMovie(id) }
					>
						{ title }
					</h1>
					<p className="flex gap-1 items-center text-2xs">
						<FaStar className="text-accent-1" />
						<span className="text-accent-1">{ vote_average }</span> / 10
					</p>
				</div>
			</div>
			<Button
				className="w-fit hover:text-accent-2"
				onClick={ () => removeFavorite(id) }
			>
				<FaTrashAlt className="text-2xs" />
			</Button>
		</li>
	)
}