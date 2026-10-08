export function printDate(date: string): string {	
	if (date.trim() === "") { return "--" }
	const dateObj = new Date(date)

	return dateObj.toLocaleDateString("DE-de", { year: "numeric" })
}

export function formatTime(time: number): string {
	const hours = Math.floor(time / 60)
	const minutes = time - hours * 60

	return `${hours > 0 ? `${hours} Std.` : ""} ${minutes} Min.`
}