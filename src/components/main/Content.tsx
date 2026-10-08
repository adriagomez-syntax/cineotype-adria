import type { Movie } from "../../types/movie";
import EmptyContent from "./EmptyContent";
import EmptyMovieList from "./list/EmptyMovieList";
import MovieList from "./list/MovieList";
import Pagination from "./list/Pagination";

type Props = {
	query: string
	movies: Movie[]
	totalResults: number
	currentPage: number
	totalPages: number
	setPage: (page: number) => void
	setSelected: (id: number) => void
}

export default function Content({ query, movies, totalResults, currentPage, totalPages, setPage, setSelected }: Props) {
	return (
		<div className="flex flex-col gap-4 md:mx-20 lg:mx-60">
			{query.trim() === ""
				? <EmptyContent />
				: <>
					<div className="flex flex-col gap-1">
						<h1 className="font-secondary text-lg">
							{"Suchergebnisse für "}
							<span className="text-primary">„{ query }“</span>
						</h1>
						<p className="text-xs text-secondary">{ totalResults } Filme gefunden</p>
					</div>
					{movies.length > 0
						? <>
							<MovieList
								movies={ movies }
								setSelected={ setSelected }
							/>
							<Pagination
								currentPage={ currentPage }
								totalPages={ totalPages }
								setPage={ setPage }
							/>
						</>
						: <EmptyMovieList />
					}
				</>
				
			}
		</div>
	)
}