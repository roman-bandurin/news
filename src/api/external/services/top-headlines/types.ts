import { LanguageType } from '../search-news'

export type CategoryType =
	| 'business'
	| 'entertainment'
	| 'general'
	| 'health'
	| 'science'
	| 'sports'
	| 'technology'

//!!!! you can't mix this param with the (country & category) or category params.
export interface ITopHeadliner {
	country?: LanguageType
	category?: CategoryType
	sources?: string
	q?: string
	pageSize?: string
	page?: string
}
