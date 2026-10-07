import { FaStar } from "react-icons/fa"
import { posterUrl } from "../../../services/tmdb"
import type { Movie } from "../../../types/movie"
import Card from "../../common/Card"
import FavoriteButton from "../../common/FavoriteButton"
import { useFavoritesContext } from "../../../context/FavoritesContext"

type MovieCardProps = {
	movie: Movie
}

export default function MovieCard({ movie }: MovieCardProps) {
	
	const { favorites, addFavorite, removeFavorite } = useFavoritesContext()
	const active = typeof (favorites.find(elem => elem.id === movie.id)) === "object"

	function printDate(date: string): string {
		
		if (date.trim() === "") { return "--" }
		const dateObj = new Date(date)

		return dateObj.toLocaleDateString("DE-de", { year: "numeric" })
	}

	function handleFavorite() {
		const findMovie = favorites.find(elem => elem.id === movie.id)

		if (findMovie) {
			removeFavorite(movie.id)
		} else {
			addFavorite(movie)
		}
	}

	return (
		<Card className="flex flex-col gap-2 pb-2 group">
			<div className="overflow-hidden relative">
				<span className="absolute flex gap-1 items-center bottom-2 left-2 py-1 px-2 bg-background-mid rounded-full z-10">
					<FaStar className="text-accent-1" />
					{ movie.vote_average } / 5
				</span>
				<FavoriteButton
					className="absolute top-2 right-2 z-10"
					active={active}
					onClick={ handleFavorite }
				>
				</FavoriteButton>
				<img 
					src={ posterUrl(movie.poster_path) }
					className="transform group-hover:scale-105 duration-300"
				/>
			</div>
			<div className="flex flex-col gap-1 px-2 w-full">
				<h1 
					className="font-secondary text-lg truncate hover:underline cursor-pointer"
				>
					{ movie.title }
				</h1>
				<p className="text-text/60">{ printDate(movie.release_date) }</p>
			</div>
		</Card>
	)
}