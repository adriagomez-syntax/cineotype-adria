export default class ErrorClass extends Error {
	#_title: string
	#_message: string

	constructor({ title = "", message = ""}: { title?: string, message?: string } = {}) {
		super()

		this.#_title = title
		this.#_message = message
	}
	
	public get title(): string {
		return this.#_title
	}
	
	public get message(): string {
		return this.#_message
	}

	protected set title(title: string) {
		this.#_title = title;
	}

	protected set message(message: string) {
		this.#_message = message
	}
}