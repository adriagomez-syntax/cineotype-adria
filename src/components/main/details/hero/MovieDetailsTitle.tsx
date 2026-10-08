type Props = {
	title: string
	tagline?: string
}

export default function MovieDetailsTitle({ title, tagline }: Props) {
	return (
		<div className="flex flex-col gap-1">
			<h1 className="font-secondary font-bold text-3xl">
				{ title }
			</h1>
			{tagline && 
				<h2 className="italic text-primary">
					„{ tagline }“
				</h2>
			}
		</div>
	)
}