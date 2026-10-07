import ErrorClass from "./ErrorClass"

export class TmdbError extends ErrorClass {
	#_httpCode: number | null
	#_message: string

	constructor(code: number) {
		super()
		
		this.#_httpCode = null
		this.#_message = ""
		this.#setHttpAndMessage(code)
		this.title = `TMDB-Fehler (${this.#_httpCode})`
		this.message = this.#_message
	}

	public get errorMessage(): string {
		return `(${this.#_httpCode}) ${this.#_message}`
	}
	
	#setHttpAndMessage(code: number): void {
		switch(code) {
		case 2:
			this.#_httpCode = 501
			this.#_message = "Invalid service: this service does not exist."
			break
		case 3:
			this.#_httpCode = 401
			this.#_message = "Authentication failed: You do not have permissions to access the service."
			break
		case 4:
			this.#_httpCode = 405
			this.#_message = "Invalid format: This service doesn't exist in that format."
			break
		case 5:
			this.#_httpCode = 422
			this.#_message = "Invalid parameters: Your request parameters are incorrect."
			break
		case 6:
			this.#_httpCode = 404
			this.#_message = "Invalid id: The pre-requisite id is invalid or not found."
			break
		case 7:
			this.#_httpCode = 401
			this.#_message = "Invalid API key: You must be granted a valid key."
			break
		case 8:
			this.#_httpCode = 403
			this.#_message = "Duplicate entry: The data you tried to submit already exists."
			break
		case 9:
			this.#_httpCode = 503
			this.#_message = "Service offline: This service is temporarily offline, try again later."
			break
		case 10:
			this.#_httpCode = 401
			this.#_message = "Suspended API key: Access to your account has been suspended, contact TMDB."
			break
		case 11:
			this.#_httpCode = 500
			this.#_message = "Internal error: Something went wrong, contact TMDB."
			break
		case 12:
			this.#_httpCode = 201
			this.#_message = "The item/record was updated successfully."
			break
		case 13:
			this.#_httpCode = 200
			this.#_message = "The item/record was deleted successfully."
			break
		case 14:
			this.#_httpCode = 401
			this.#_message = "Authentication failed."
			break
		case 15:
			this.#_httpCode = 500
			this.#_message = "Failed."
			break
		case 16:
			this.#_httpCode = 401
			this.#_message = "Device denied."
			break
		case 17:
			this.#_httpCode = 401
			this.#_message = "Session denied."
			break
		case 18:
			this.#_httpCode = 400
			this.#_message = "Validation failed."
			break
		case 19:
			this.#_httpCode = 406
			this.#_message = "Invalid accept header."
			break
		case 20:
			this.#_httpCode = 422
			this.#_message = "Invalid date range: Should be a range no longer than 14 days."
			break
		case 21:
			this.#_httpCode = 200
			this.#_message = "Entry not found: The item you are trying to edit cannot be found."
			break
		case 22:
			this.#_httpCode = 400
			this.#_message = "Invalid page: Pages start at 1 and max at 500. They are expected to be an integer."
			break
		case 23:
			this.#_httpCode = 400
			this.#_message = "Invalid date: Format needs to be YYYY-MM-DD."
			break
		case 24:
			this.#_httpCode = 504
			this.#_message = "Your request to the backend server timed out. Try again."
			break
		case 25:
			this.#_httpCode = 429
			this.#_message = "Your request count (#) is over the allowed limit of (40)."
			break
		case 26:
			this.#_httpCode = 400
			this.#_message = "You must provide a username and password."
			break
		case 27:
			this.#_httpCode = 400
			this.#_message = "Too many append to response objects: The maximum number of remote calls is 20."
			break
		case 28:
			this.#_httpCode = 400
			this.#_message = "Invalid timezone: Please consult the documentation for a valid timezone."
			break
		case 29:
			this.#_httpCode = 400
			this.#_message = "You must confirm this action: Please provide a confirm=true parameter."
			break
		case 30:
			this.#_httpCode = 401
			this.#_message = "Invalid username and/or password: You did not provide a valid login."
			break
		case 31:
			this.#_httpCode = 401
			this.#_message = "Account disabled: Your account is no longer active. Contact TMDB if this is an error."
			break
		case 32:
			this.#_httpCode = 401
			this.#_message = "Email not verified: Your email address has not been verified."
			break
		case 33:
			this.#_httpCode = 401
			this.#_message = "Invalid request token: The request token is either expired or invalid."
			break
		case 34:
			this.#_httpCode = 404
			this.#_message = "The resource you requested could not be found."
			break
		case 35:
			this.#_httpCode = 401
			this.#_message = "Invalid token."
			break
		case 36:
			this.#_httpCode = 401
			this.#_message = "This token hasn't been granted write permission by the user."
			break
		case 37:
			this.#_httpCode = 404
			this.#_message = "The requested session could not be found."
			break
		case 38:
			this.#_httpCode = 401
			this.#_message = "You don't have permission to edit this resource."
			break
		case 39:
			this.#_httpCode = 401
			this.#_message = "This resource is private."
			break
		case 40:
			this.#_httpCode = 200
			this.#_message = "Nothing to update."
			break
		case 41:
			this.#_httpCode = 422
			this.#_message = "This request token hasn't been approved by the user."
			break
		case 42:
			this.#_httpCode = 405
			this.#_message = "This request method is not supported for this resource."
			break
		case 43:
			this.#_httpCode = 502
			this.#_message = "Couldn't connect to the backend server."
			break
		case 44:
			this.#_httpCode = 500
			this.#_message = "The ID is invalid."
			break
		case 45:
			this.#_httpCode = 403
			this.#_message = "This user has been suspended."
			break
		case 46:
			this.#_httpCode = 503
			this.#_message = "The API is undergoing maintenance. Try again later."
			break
		case 47:
			this.#_httpCode = 400
			this.#_message = "The input is not valid."
			break
		default:
			this.#_httpCode = 500
			this.#_message = "Unknown Error!"
		}
	}
}