export const getUrl = (queryParams: object): string => {
	const url = new URLSearchParams()
	Object.entries(queryParams).forEach(param => {
		url.set(...param)
	})
	return url.toString()
}
