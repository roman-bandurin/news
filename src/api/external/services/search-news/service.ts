import { axiosExternalClassic } from '../../config'
import { getUrl } from '../lib/get-url'
import { IEverythingRequestPar } from './types'

// news oldest +-30 days don`t found
export const searchNews = async (queryParams: IEverythingRequestPar) => {
	const url = getUrl(queryParams)
	return await axiosExternalClassic.get(`/everything?${url}`)
}
