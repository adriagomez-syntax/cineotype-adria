import type { MovieDetails } from "../../../types/movie"
import MovieDetailsClose from "./hero/MovieDetailsClose"
import MovieDetailsImage from "./hero/MovieDetailsImage"
import MovieDetailsTitle from "./hero/MovieDetailsTitle"
import MovieDetailsProperties from "./hero/MovieDetailsProperties"

type Props = MovieDetails & {
	setOpen: (open: boolean) => void
}

export default function MovieDetailsHero({ poster_path, release_date, runtime, tagline, title, vote_average, setOpen }: Props) {
	return (
		<div className="flex gap-1">
			<div className="flex gap-4 ">
				<MovieDetailsImage
					title={ title }
					poster_path={ poster_path }
				/>
				<div className="flex flex-col gap-4 justify-end">
					<MovieDetailsTitle
						title={ title }
						tagline={ tagline }
					/>
					<MovieDetailsProperties
						release_date={ release_date }
						runtime={ runtime }
						vote_average={ vote_average }
					/>
				</div>
			</div>
			<MovieDetailsClose setOpen={ setOpen } />
		</div>
	)
}