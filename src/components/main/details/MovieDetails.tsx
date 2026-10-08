import { FaXmark } from "react-icons/fa6"
import type ErrorClass from "../../../assets/ErrorClass"
import type { MovieDetails } from "../../../types/movie"
import Loader from "../../common/Loader"
import ShowError from "../../common/ShowError"
import Button from "../../common/Button"
import { posterUrl } from "../../../services/tmdb"
import { FaCalendar, FaRegClock, FaStar } from "react-icons/fa"
import { formatTime, printDate } from "../../../assets/utils/utils"
import FavoriteButton from "../../common/FavoriteButton"
import { useFavoritesContext } from "../../../context/FavoritesContext"

type Props = {
	movie: MovieDetails | null
	error: ErrorClass | null
	setOpen: (open: boolean) => void
}

export default function MovieDetails({ movie, error, setOpen }: Props) {
	
	const { isFavorite, toggleFavorite } = useFavoritesContext()
	const active = movie ? isFavorite(movie.id) : false

	return (
		<article className="flex-1 flex flex-col gap-4 p-4 overflow-hidden">
			{!movie
				? !error
					? <Loader className="my-auto" />
					: <ShowError error={ error } />
				:<>
					<div className="flex flex-col gap-4 overflow-scroll">
						<div className="flex gap-1">
							<div className="flex gap-4 ">
								<div className="max-w-1/3 overflow-hidden rounded-md">
									<img 
										className="object-contain transform hover:scale-105"
										width={600}
										src={posterUrl(movie.poster_path)}
										alt={ movie.title }
									/>
								</div>
								<div className="flex flex-col gap-4 justify-end">
									<div className="flex flex-col gap-1">
										<h1 className="font-secondary font-bold text-3xl">
											{ movie.title }
										</h1>
										{movie.tagline && 
											<h2 className="italic text-primary">
												„{ movie.tagline }“
											</h2>
										}
									</div>
									<div className="flex flex-col md:flex-row gap-2">
										{movie.runtime > 0 &&
											<div className="flex gap-1 items-center bg-background-dark rounded-full text-xs p-2 w-fit">
												<FaRegClock className="text-primary" />
												<span>{ formatTime(movie.runtime) }</span>
											</div>
										}
										{movie.release_date &&
											<div className="flex gap-1 items-center bg-background-dark rounded-full text-xs p-2 w-fit">
												<FaCalendar className="text-primary" />
												<span>{ printDate(movie.release_date) }</span>
											</div>
										}
										<div className="flex gap-1 items-center bg-background-dark rounded-full text-xs p-2 w-fit">
											<FaStar className="text-accent-1" />
											<span>{ movie.vote_average } / 10</span>
										</div>
									</div>
								</div>
							</div>
							<div className="flex-1 flex justify-end h-fit">
								<Button
									className="bg-background-dark rounded-full p-2"
									onClick={ () => setOpen(false) }
								>
									<FaXmark />
								</Button>
							</div>
						</div>
						<div className="flex flex-col gap-2 md:flex-row md:justify-between">
							<div className="md:max-w-8/15 flex gap-2 items-center text-xs">
								<p className="uppercase">Genres: </p>
								<ul className="flex gap-1 text-accent-2 overflow-scroll">
									{movie.genres.map(genre => (
										<li 
											key={ genre.id }
											className="p-2 bg-background-dark rounded-full text-nowrap"
										>
											{ genre.name }
										</li>
									))}
								</ul>
							</div>
							<div>
								<FavoriteButton
									className="w-full md:w-auto bg-background p-2 rounded-full justify-center"
									label={active ? "In Favoriten geschpeichert" : "In Favoriten schpeichern"}
									active={ active }
									onClick={ () => toggleFavorite(movie) }
								/>
							</div>
						</div>
						<div className="flex flex-col gap-2">
							<h3 className="font-secondary font-bold text-lg border-l-4 border-primary pl-2">Handlung & Übersicht</h3>
							<p>{ movie.overview }</p>
						</div>
					</div>
				</>
			}
		</article>
	)
}