import { useMainContext } from "../../context/MainContext"

export default function MovieList() {
	
	const { movies } = useMainContext()
	
	return (
		<ul className="flex flex-col gap-1">
			{movies.map(movie => (
				<li key={movie.id}>{movie.title}</li>
			))}
		</ul>
	)
}