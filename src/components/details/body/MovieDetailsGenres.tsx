import type { Genre } from "../../../types/movie"

type Props = {
	genres: Genre[]
}

export default function MovieDetailsGenres({ genres }: Props) {
	return (
		<div className="md:max-w-8/15 flex gap-2 items-center text-xs">
			<p className="uppercase">Genres: </p>
			<ul className="flex gap-1 text-accent-2 overflow-scroll">
				{genres.map(genre => (
					<li 
						key={ genre.id }
						className="p-2 bg-background-dark rounded-full text-nowrap"
					>
						{ genre.name }
					</li>
				))}
			</ul>
		</div>
	)
}