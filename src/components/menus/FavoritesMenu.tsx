import SidebarMenu from "../common/SidebarMenu";
import FavoritesContent from "../favorites/FavoritesContent";

type Props = {
	open: boolean
	setOpen: (open: boolean) => void
}

export default function FavoritesMenu({ open, setOpen }: Props) {
	return (
		<SidebarMenu 
			direction="top"
			open={ open }
			setOpen={ setOpen }
			position="top-15 right-0"
			dimensions="h-full w-full md:max-w-80"
		>
			<FavoritesContent />
		</SidebarMenu>
	)
}