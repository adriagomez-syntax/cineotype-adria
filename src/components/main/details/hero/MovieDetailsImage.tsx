import { posterUrl } from "../../../../services/tmdb"

type Props = {
	title: string
	poster_path: string | null
}

export default function MovieDetailsImage({ title, poster_path }: Props) {
	return (
		<div className="max-w-1/3 overflow-hidden rounded-md">
			<img 
				className="object-contain transform hover:scale-105"
				width={600}
				src={posterUrl(poster_path)}
				alt={ title }
			/>
		</div>
	)
}