import type { Movie } from "../../../types/movie"
import MovieCard from "./MovieCard"

type MovieListProps = {
	movies: Movie[]
}

export default function MovieList({ movies }: MovieListProps) {
	
	return (
		<div className="grid grid-cols-2 gap-4">
			{movies.map(movie => (
				<MovieCard key={ movie.id } movie={ movie } />
			))}
		</div>
	)
}