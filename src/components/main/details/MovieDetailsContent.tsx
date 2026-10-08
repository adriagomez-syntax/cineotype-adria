import type { MovieDetails } from "../../../types/movie"
import { useFavoritesContext } from "../../../context/FavoritesContext"
import FavoriteButton from "../../common/FavoriteButton"
import MovieDetailsHero from "./MovieDetailsHero"
import MovieDetailsGenres from "./body/MovieDetailsGenres"
import MovieDetailsOverview from "./body/MovieDetailsOverview"

type Props = {
	movie: MovieDetails
	setOpen: (open: boolean) => void
}

export default function MovieDetailsContent({ movie, setOpen }: Props) {
	
	const { isFavorite, toggleFavorite } = useFavoritesContext()
	const active = movie ? isFavorite(movie.id) : false
	
	return (
		<div className="flex flex-col gap-4 overflow-scroll">
			<MovieDetailsHero
				{...movie}
				setOpen={ setOpen }
			/>
			<div className="flex flex-col gap-2 md:flex-row md:justify-between">
				<MovieDetailsGenres genres={ movie.genres } />
				<div>
					<FavoriteButton
						className="w-full md:w-auto bg-background p-2 rounded-full justify-center"
						label={active ? "In Favoriten geschpeichert" : "In Favoriten schpeichern"}
						active={ active }
						onClick={ () => toggleFavorite(movie) }
					/>
				</div>
			</div>
			<MovieDetailsOverview overview={ movie.overview } />
		</div>
	)
}