import Favorites from "./Favorites";
import Logo from "./Logo";

export default function Header() {
	return (
		<header className="flex h-15 justify-between gap-2 p-4 bg-background-dark border-b border-background-mid">
			<Logo />
			<Favorites />
		</header>
	)
}