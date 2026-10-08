import type ErrorClass from "../../../assets/ErrorClass"
import type { MovieDetails } from "../../../types/movie"
import Loader from "../../common/Loader"
import ShowError from "../../common/ShowError"
import MovieDetailsContent from "./MovieDetailsContent"

type Props = {
	movie: MovieDetails | null
	error: ErrorClass | null
	setOpen: (open: boolean) => void
}

export default function MovieDetails({ movie, error, setOpen }: Props) {
	return (
		<article className="flex-1 flex flex-col gap-4 p-4 overflow-hidden">
			{!movie
				? !error
					? <Loader className="my-auto" />
					: <ShowError error={ error } />
				: <MovieDetailsContent
					movie={ movie }
					setOpen={ setOpen }
				/>
			}
		</article>
	)
}