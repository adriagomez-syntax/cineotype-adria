import useMovieSearch from "../../hooks/useMovieSearch"

export default function Main() {
	
	const { movies, loading, error } = useMovieSearch("matrix")

	return (
		<main className="flex-1 p-4">
			{loading
				? "Lädt..."
				: error
					? <p>{error}</p>
					:movies.map(movie => (
						<p key={movie.id}>{movie.title}</p>
					))}
		</main>
	)
}