import { useMainContext } from "../../context/MainContext";
import MovieList from "./MovieList";

export default function Content() {

	const { query, movies } = useMainContext()

	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col gap-1">
				<h1 className="font-secondary text-lg">
					{"Suchergebnisse für "}
					<span className="text-primary">„{ query }“</span>
				</h1>
				<p className="text-xs text-text/60">{ movies.length } Filme gefunden</p>
			</div>
			<MovieList />
		</div>
	)
}