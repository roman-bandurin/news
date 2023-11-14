import axios from 'axios'

export const axiosExternalClassic = axios.create({
	baseURL: import.meta.env.VITE_URL_NEWS_API,
	headers: {
		'X-API-Key': import.meta.env.VITE_NEWS_API_KEY,
		'Content-Type': 'application/json',
		//some header ...
	},
})
