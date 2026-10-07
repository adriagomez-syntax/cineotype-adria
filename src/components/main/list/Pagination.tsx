import Button from "../../common/Button"

type Props = {
	currentPage: number
	totalPages: number
	setPage: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, setPage }: Props) {
	
	const pages: number[] = []
	
	function addPage(value: number) {
		if (value > 0 && value <= totalPages && !pages.includes(value)) { pages.push(value) }
	}

	addPage(1)
	addPage(totalPages)
	addPage(currentPage)
	addPage(currentPage - 1)
	addPage(currentPage + 1)
	pages.sort()
	
	return (
		<div className="flex justify-center">
			{ totalPages > 0 &&
				<ul className="min-w-0 w-fit flex gap-1 p-2 bg-background-mid rounded-xl font-bold text-text/60">
					<Button
						className="not-disabled:hover:bg-background not-disabled:hover:text-primary py-2 px-4 rounded-sm transition duration-300"
						onClick={() => setPage(currentPage - 1)}
						disabled={ currentPage <= 1 }
					>
						{"<"}
					</Button>
					{pages.map((page, index) => {
						const next = index < pages.length - 1 ? pages[index + 1] : index
						const nextDots = page + 1 < next

						return (
							<li key={ page } className="flex gap-1 items-center">
								{currentPage === page
									? <p className="bg-primary text-background-mid py-2 px-4 rounded-sm">
										{page}
									</p>
									: <Button  
										className="hover:bg-background hover:text-primary py-2 px-4 rounded-sm transition duration-300"
										onClick={() => setPage(page)}
									>
										{ page }
									</Button>
								}
								{nextDots && <span className="p-2">...</span>}
							</li>
						)
					})}
					<Button
						className="not-disabled:hover:bg-background not-disabled:hover:text-primary py-2 px-4 rounded-sm transition duration-300"
						onClick={() => setPage(currentPage + 1)}
						disabled={ currentPage >= totalPages }
					>
						{">"}
					</Button>
				</ul>
			}
		</div>
	)
}