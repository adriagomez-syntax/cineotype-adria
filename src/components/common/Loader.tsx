type Props = {
	className?: string
}

export default function Loader({ className = "" }: Props) {
	return(
		<div className={`${className} flex-1 flex justify-center items-center`}>
			<div className="loader"></div>
		</div>
	)
}