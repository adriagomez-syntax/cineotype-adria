export class TmdbError {
	#httpCode: number | null
	#message: string | null

	constructor(code: number) {
		this.#httpCode = null
		this.#message = null
		this.#setHttpAndMessage(code)
	}

	public get errorMessage(): string {
		return `(${this.#httpCode}) ${this.#message}`
	}
	
	#setHttpAndMessage(code: number): void {
		switch(code) {
		case 2:
			this.#httpCode = 501
			this.#message = "Invalid service: this service does not exist."
			break
		case 3:
			this.#httpCode = 401
			this.#message = "Authentication failed: You do not have permissions to access the service."
			break
		case 4:
			this.#httpCode = 405
			this.#message = "Invalid format: This service doesn't exist in that format."
			break
		case 5:
			this.#httpCode = 422
			this.#message = "Invalid parameters: Your request parameters are incorrect."
			break
		case 6:
			this.#httpCode = 404
			this.#message = "Invalid id: The pre-requisite id is invalid or not found."
			break
		case 7:
			this.#httpCode = 401
			this.#message = "Invalid API key: You must be granted a valid key."
			break
		case 8:
			this.#httpCode = 403
			this.#message = "Duplicate entry: The data you tried to submit already exists."
			break
		case 9:
			this.#httpCode = 503
			this.#message = "Service offline: This service is temporarily offline, try again later."
			break
		case 10:
			this.#httpCode = 401
			this.#message = "Suspended API key: Access to your account has been suspended, contact TMDB."
			break
		case 11:
			this.#httpCode = 500
			this.#message = "Internal error: Something went wrong, contact TMDB."
			break
		case 12:
			this.#httpCode = 201
			this.#message = "The item/record was updated successfully."
			break
		case 13:
			this.#httpCode = 200
			this.#message = "The item/record was deleted successfully."
			break
		case 14:
			this.#httpCode = 401
			this.#message = "Authentication failed."
			break
		case 15:
			this.#httpCode = 500
			this.#message = "Failed."
			break
		case 16:
			this.#httpCode = 401
			this.#message = "Device denied."
			break
		case 17:
			this.#httpCode = 401
			this.#message = "Session denied."
			break
		case 18:
			this.#httpCode = 400
			this.#message = "Validation failed."
			break
		case 19:
			this.#httpCode = 406
			this.#message = "Invalid accept header."
			break
		case 20:
			this.#httpCode = 422
			this.#message = "Invalid date range: Should be a range no longer than 14 days."
			break
		case 21:
			this.#httpCode = 200
			this.#message = "Entry not found: The item you are trying to edit cannot be found."
			break
		case 22:
			this.#httpCode = 400
			this.#message = "Invalid page: Pages start at 1 and max at 500. They are expected to be an integer."
			break
		case 23:
			this.#httpCode = 400
			this.#message = "Invalid date: Format needs to be YYYY-MM-DD."
			break
		case 24:
			this.#httpCode = 504
			this.#message = "Your request to the backend server timed out. Try again."
			break
		case 25:
			this.#httpCode = 429
			this.#message = "Your request count (#) is over the allowed limit of (40)."
			break
		case 26:
			this.#httpCode = 400
			this.#message = "You must provide a username and password."
			break
		case 27:
			this.#httpCode = 400
			this.#message = "Too many append to response objects: The maximum number of remote calls is 20."
			break
		case 28:
			this.#httpCode = 400
			this.#message = "Invalid timezone: Please consult the documentation for a valid timezone."
			break
		case 29:
			this.#httpCode = 400
			this.#message = "You must confirm this action: Please provide a confirm=true parameter."
			break
		case 30:
			this.#httpCode = 401
			this.#message = "Invalid username and/or password: You did not provide a valid login."
			break
		case 31:
			this.#httpCode = 401
			this.#message = "Account disabled: Your account is no longer active. Contact TMDB if this is an error."
			break
		case 32:
			this.#httpCode = 401
			this.#message = "Email not verified: Your email address has not been verified."
			break
		case 33:
			this.#httpCode = 401
			this.#message = "Invalid request token: The request token is either expired or invalid."
			break
		case 34:
			this.#httpCode = 404
			this.#message = "The resource you requested could not be found."
			break
		case 35:
			this.#httpCode = 401
			this.#message = "Invalid token."
			break
		case 36:
			this.#httpCode = 401
			this.#message = "This token hasn't been granted write permission by the user."
			break
		case 37:
			this.#httpCode = 404
			this.#message = "The requested session could not be found."
			break
		case 38:
			this.#httpCode = 401
			this.#message = "You don't have permission to edit this resource."
			break
		case 39:
			this.#httpCode = 401
			this.#message = "This resource is private."
			break
		case 40:
			this.#httpCode = 200
			this.#message = "Nothing to update."
			break
		case 41:
			this.#httpCode = 422
			this.#message = "This request token hasn't been approved by the user."
			break
		case 42:
			this.#httpCode = 405
			this.#message = "This request method is not supported for this resource."
			break
		case 43:
			this.#httpCode = 502
			this.#message = "Couldn't connect to the backend server."
			break
		case 44:
			this.#httpCode = 500
			this.#message = "The ID is invalid."
			break
		case 45:
			this.#httpCode = 403
			this.#message = "This user has been suspended."
			break
		case 46:
			this.#httpCode = 503
			this.#message = "The API is undergoing maintenance. Try again later."
			break
		case 47:
			this.#httpCode = 400
			this.#message = "The input is not valid."
			break
		default:
			this.#httpCode = 500
			this.#message = "Unknown Error!"
		}
	}
}