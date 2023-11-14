import { axiosExternalClassic } from '../../config'
import { getUrl } from '../lib/get-url'
import { ITopHeadliner } from './types'

//!!!! you can't mix this param with the country or category params.!!!!
export const topHeadliners = async (queryParams?: ITopHeadliner) => {
	const url = getUrl(queryParams ?? { sources: 'bbc-news' })
	return await axiosExternalClassic.get(`/top-headlines?${url}`)
}
