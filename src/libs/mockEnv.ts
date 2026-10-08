type Env = {
	VITE_PROXY_URL: string
}

export const env: Env = {
	VITE_PROXY_URL: String(import.meta.env.VITE_PROXY_URL)
};