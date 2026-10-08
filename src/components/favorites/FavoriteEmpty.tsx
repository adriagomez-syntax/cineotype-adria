import { FaHeartBroken } from "react-icons/fa";

export default function FavoriteEmpty() {
	return (
		<div className="flex flex-col gap-6 items-center p-8">
			<FaHeartBroken className="text-primary text-6xl" />
			<h1 className="font-secondary font-bold text-xl">
				Deine Favoritenliste ist leer
			</h1>
			<h2 className="text-md text-center text-secondary">
				Du hast noch keine Filme hinzugefügt. Tippe auf das Herz-Symbol bei einem Film, um ihn für später zu merken.
			</h2>
		</div>
	)
}