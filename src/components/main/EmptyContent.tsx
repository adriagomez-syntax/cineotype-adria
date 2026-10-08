import { FaSafari } from "react-icons/fa";
import Card from "../common/Card";

export default function EmptyContent() {
	return (
		<Card className="flex flex-col gap-6 items-center p-8">
			<FaSafari className="text-primary text-6xl" />
			<h1 className="font-secondary font-bold text-xl">
				{"Wonach suchst du "}
				<span className="text-primary italic">heute</span>?
			</h1>
			<h2 className="text-md text-center text-secondary">Tauche ein in Tausende Meisterwerke, visionäre Autorenfilme und zeitlose Ikonen der Filmgeschichte.</h2>
		</Card>
	)
}