import useMovieSearch from "./hooks/useMovieSearch"

export default function App() {

	const { movies, loading, error } = useMovieSearch("matrix")

	return (
		<>
			{loading
				? "Lädt..."
				: error
					? <p>{error}</p>
					:movies.map(movie => (
						<p>{movie.title}</p>
					))}
		</>
	)
}
