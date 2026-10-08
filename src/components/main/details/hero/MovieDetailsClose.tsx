import { FaXmark } from "react-icons/fa6";
import Button from "../../../common/Button";

type Props = {
	setOpen: (open: boolean) => void
}

export default function MovieDetailsClose({ setOpen }: Props) {
	return (
		<div className="flex-1 flex justify-end h-fit">
			<Button
				className="bg-background-dark rounded-full p-2"
				onClick={ () => setOpen(false) }
			>
				<FaXmark />
			</Button>
		</div>
	)
}