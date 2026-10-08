import ErrorClass from "./ErrorClass"

export class TmdbError extends ErrorClass {
	#_httpCode: number | null
	#_message: string

	constructor(code: number, message: string) {
		super()
		
		this.#_httpCode = code
		this.#_message = message
		this.title = `TMDB-Fehler (${this.#_httpCode})`
		this.message = this.#_message
	}

	public get errorMessage(): string {
		return `(${this.#_httpCode}) ${this.#_message}`
	}
}