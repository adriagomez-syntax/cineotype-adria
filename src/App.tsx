import type { Movie } from "./types/movie";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { FavoritesContext } from "./context/FavoritesContext";
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
	
	const [favorites, setFavorites] = useLocalStorage<Movie[]>("favorites", [])
	
	return (
		<div className="flex flex-col gap-4 min-h-screen font-primary text-sm text-text bg-background">
			<FavoritesContext value={{ favorites, setFavorites }}>
				<Header />
				<Main />
				<Footer />
			</FavoritesContext>
		</div>

	)
}
