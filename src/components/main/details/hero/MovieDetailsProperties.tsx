import { FaCalendar, FaRegClock, FaStar } from "react-icons/fa"
import { formatTime, printDate } from "../../../../assets/utils/utils"

type Props = {
	release_date: string
	runtime: number
	vote_average: number
}

export default function MovieDetailsProperties({ release_date, runtime, vote_average }: Props) {
	return (
		<div className="flex flex-col md:flex-row gap-2">
			{runtime > 0 &&
				<div className="flex gap-1 items-center bg-background-dark rounded-full text-xs p-2 w-fit">
					<FaRegClock className="text-primary" />
					<span>{ formatTime(runtime) }</span>
				</div>
			}
			{release_date &&
				<div className="flex gap-1 items-center bg-background-dark rounded-full text-xs p-2 w-fit">
					<FaCalendar className="text-primary" />
					<span>{ printDate(release_date) }</span>
				</div>
			}
			<div className="flex gap-1 items-center bg-background-dark rounded-full text-xs p-2 w-fit">
				<FaStar className="text-accent-1" />
				<span>{ vote_average } / 10</span>
			</div>
		</div>
	)
}