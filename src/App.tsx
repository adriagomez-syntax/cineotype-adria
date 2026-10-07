import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { FavoritesContext } from "./context/FavoritesContext";
import useFavorites from "./hooks/useFavorites";

export default function App() {
	
	const {favorites, addFavorite, removeFavorite, clearFavorites} = useFavorites()

	return (
		<div className="flex flex-col gap-4 min-h-screen font-primary text-sm text-text bg-background">
			<FavoritesContext value={{ favorites, addFavorite, removeFavorite, clearFavorites }}>
				<Header />
				<Main />
				<Footer />
			</FavoritesContext>
		</div>

	)
}
