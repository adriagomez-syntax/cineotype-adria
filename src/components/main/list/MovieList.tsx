import type { Movie } from "../../../types/movie"
import MovieCard from "./MovieCard"

type MovieListProps = {
	movies: Movie[],
	setSelected: (id: number) => void
}

export default function MovieList({ movies, setSelected }: MovieListProps) {
	
	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
			{movies.map(movie => (
				<MovieCard
					key={ movie.id }
					movie={ movie }
					setSelected={ setSelected }
				/>
			))}
		</div>
	)
}