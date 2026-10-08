type Props = {
	overview: string
}

export default function MovieDetailsOverview({ overview }: Props) {
	return (
		<div className="flex flex-col gap-2">
			<h3 className="font-secondary font-bold text-lg border-l-4 border-primary pl-2">Handlung & Übersicht</h3>
			<p>{ overview }</p>
		</div>
	)
}