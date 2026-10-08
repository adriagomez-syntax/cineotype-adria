import Favorites from "../favorites/Favorites";
import Logo from "./Logo";

export default function Header() {
	return (
		<header className="w-full fixed flex h-15 border-b border-background-mid z-200">
			<div className="flex-1 flex justify-between gap-2 p-4 bg-background-dark z-2000">
				<Logo />
				<Favorites />
			</div>
		</header>
	)
}