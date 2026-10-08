import Card from "../../common/Card";
import { FaPhotoVideo } from "react-icons/fa";

export default function EmptyMovieList() {
	return (
		<Card className="flex flex-col gap-6 items-center p-8">
			<FaPhotoVideo className="text-primary text-6xl" />
			<h1 className="font-secondary font-bold text-xl">Keine Filme gefunden</h1>
			<h2 className="text-md text-center text-secondary">Wir konnten keine Treffer für deine Suche finden. Bitte überprüfe die Schreibweise oder probiere es mit einem anderen Begriff.</h2>
		</Card>
	)
}