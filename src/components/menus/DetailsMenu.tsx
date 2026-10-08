import type ErrorClass from "../../assets/ErrorClass";
import type { MovieDetails } from "../../types/movie";
import Modal from "../common/Modal";
import SidebarMenu from "../common/SidebarMenu";
import MovieDetailsArticle from "../details/MovieDetailsArticle";

type Props = {
	movie: MovieDetails | null
	error: ErrorClass | null
	open: boolean
	setOpen: (open: boolean) => void
}

export default function DetailsMenu({ movie, error, open, setOpen }: Props) {
	return (
		<>
			<SidebarMenu
				direction="bottom"
				open={ open }
				setOpen={ setOpen }
				className="md:hidden"
			>
				<MovieDetailsArticle
					movie={ movie}
					error={ error }
					setOpen={ setOpen }
				/>
			</SidebarMenu>
			<Modal
				open={ open }
				setOpen={ setOpen }
				className="hidden md:block"
			>
				<MovieDetailsArticle
					movie={ movie }
					error={ error }
					setOpen={ setOpen }
				/>
			</Modal>
		</>
	)
}