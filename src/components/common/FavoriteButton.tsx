import { FaHeart, FaRegHeart } from "react-icons/fa";
import Button from "./Button";

type Props = {
	onClick?: () => void
	className?: string
}

export default function FavoriteButton({ onClick, className = "" }: Props) {
	return (
		<Button 
			className={`${className} group flex`}
			onClick={ onClick }
		>
			<FaHeart className="hidden group-hover:inline text-accent-2 duration-300" />
			<FaRegHeart className="group-hover:hidden duration-300" />
		</Button>
	)
}