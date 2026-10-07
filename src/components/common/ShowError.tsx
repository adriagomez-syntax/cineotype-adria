import { FaExclamationCircle } from "react-icons/fa"
import type ErrorClass from "../../assets/ErrorClass"
import Card from "./Card"

type Props = {
	error: ErrorClass
	className?: string
}

export default function ShowError({ error, className = "" }: Props) {
	return (
		<Card className={`${className} flex flex-col gap-6 items-center p-8`}>
			<FaExclamationCircle className="text-accent-2 text-6xl inset-ring-3 ring-accent-2 shadow-md shadow-accent-2 rounded-full" />
			<div className="flex flex-col gap-1 items-center">
				<h1 className="font-secondary font-bold text-xl">Ein Fehler gefunden!</h1>
				<h2 className="font-secondary italic text-lg text-primary">„{ error.title }“</h2>
			</div>
			<p className="text-xs text-text/60">{ error.message }</p>
		</Card>
	)
}