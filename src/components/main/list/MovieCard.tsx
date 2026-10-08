import { FaStar } from "react-icons/fa"
import { posterUrl } from "../../../services/tmdb"
import type { Movie } from "../../../types/movie"
import Card from "../../common/Card"
import FavoriteButton from "../../common/FavoriteButton"
import { useFavoritesContext } from "../../../context/FavoritesContext"
import { printDate } from "../../../assets/utils/utils"

type MovieCardProps = {
	movie: Movie
	setSelected: (id: number) => void
}

export default function MovieCard({ movie, setSelected }: MovieCardProps) {
	
	const { toggleFavorite, isFavorite } = useFavoritesContext()
	const active = isFavorite(movie.id)

	return (
		<Card className="flex flex-col gap-2 pb-2 group">
			<div className="overflow-hidden relative">
				<span className="absolute flex gap-1 items-center bottom-2 left-2 py-1 px-2 bg-background-mid rounded-full z-10">
					<FaStar className="text-accent-1" />
					{ movie.vote_average } / 10
				</span>
				<FavoriteButton
					className="absolute top-2 right-2 z-10 text-background dark:text-text"
					active={active}
					onClick={ () => toggleFavorite(movie) }
				>
				</FavoriteButton>
				<img 
					className="transform group-hover:scale-105 duration-300 cursor-pointer"
					src={ posterUrl(movie.poster_path) }
					alt={ movie.title }
					onClick={ () => setSelected(movie.id) }
				/>
			</div>
			<div className="flex flex-col gap-1 px-2 w-full">
				<h1 
					className="font-secondary text-lg truncate hover:underline cursor-pointer"
					title={ movie.title }
					onClick={ () => setSelected(movie.id) }
				>
					{ movie.title }
				</h1>
				<p className="text-secondary">{ printDate(movie.release_date) }</p>
			</div>
		</Card>
	)
}