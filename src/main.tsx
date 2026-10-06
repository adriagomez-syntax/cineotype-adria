import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { searchMovies, getMovie } from './services/tmdb.ts'

async function load() {
	searchMovies("Matrix")
		.then(films => {
			const film = films[0]
			return getMovie(film.id)
		})
		.then(film => console.log(film))
}

load()


createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>,
)
