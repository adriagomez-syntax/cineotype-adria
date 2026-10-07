import { FaHeart, FaRegHeart } from "react-icons/fa";
import Button from "./Button";

type Props = {
	active?: boolean
	onClick?: () => void
	className?: string
}

export default function FavoriteButton({ active = false, onClick, className = "" }: Props) {
	return (
		<Button 
			className={`${className} group/favorite flex`}
			onClick={ onClick }
		>
			<FaHeart className={`${!active ? "hidden group-hover/favorite:inline" : "inline"} text-accent-2 duration-300`} />
			<FaRegHeart className={`${!active ? "group-hover/favorite:hidden" : "hidden"} duration-300`} />
		</Button>
	)
}