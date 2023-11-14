export type LanguageType =
	| 'ar'
	| 'de'
	| 'en'
	| 'es'
	| 'fr'
	| 'he'
	| 'it'
	| 'nl'
	| 'no'
	| 'pt'
	| 'ru'
	| 'sv'
	| 'ud'
	| 'zh'

export type SortByType = 'relevancy' | 'popularity' | 'publishedAt'

// 2023-11-14
// 2023-11-14T10:44:28  написать по желанию

// !!!!!! THIS IS AS AN EXPERIMENT !!!!!!!!
// news oldest 30 days don`t found
type Enumerate<
	N extends number,
	Acc extends number[] = []
> = Acc['length'] extends N
	? Acc[number]
	: Enumerate<N, [...Acc, Acc['length']]>

type IntRange<F extends number, T extends number> = Exclude<
	Enumerate<T>,
	Enumerate<F>
>
export type DateType = `${IntRange<19, 21>}${number}${number}-${IntRange<
	0,
	2
>}${IntRange<0, 10>}-${IntRange<0, 4>}${IntRange<0, 32>}`
// !!!!!! THIS IS AS AN EXPERIMENT !!!!!!!!

export interface IEverythingRequestPar {
	q: string
	sources?: string
	from?: DateType
	to?: DateType
	sortBy?: SortByType
	pageSize?: string
	page?: string
}

// q
// Keywords or phrases to search for in the article title and body.

// Advanced search is supported here:

// Surround phrases with quotes (") for exact match.
// Prepend words or phrases that must appear with a + symbol. Eg: +bitcoin
// Prepend words that must not appear with a - symbol. Eg: -bitcoin
// Alternatively you can use the AND / OR / NOT keywords, and optionally group these with parenthesis. Eg: crypto AND (ethereum OR litecoin) NOT bitcoin.
// The complete value for q must be URL-encoded. Max length: 500 chars.

// searchIn
// The fields to restrict your q search to.

// The possible options are:

// title
// description
// content
// Multiple options can be specified by separating them with a comma, for example: title,content.

// This parameter is useful if you have an edge case where searching all the fields is not giving the desired outcome, but generally you should not need to set this.

// Default: all fields are searched.
// sources
// A comma-seperated string of identifiers (maximum 20) for the news sources or blogs you want headlines from. Use the /sources endpoint to locate these programmatically or look at the sources index.

// domains
// A comma-seperated string of domains (eg bbc.co.uk, techcrunch.com, engadget.com) to restrict the search to.

// excludeDomains
// A comma-seperated string of domains (eg bbc.co.uk, techcrunch.com, engadget.com) to remove from the results.

// from
// A date and optional time for the oldest article allowed. This should be in ISO 8601 format (e.g. 2023-11-14 or 2023-11-14T10:31:27)

// Default: the oldest according to your plan.
// to
// A date and optional time for the newest article allowed. This should be in ISO 8601 format (e.g. 2023-11-14 or 2023-11-14T10:31:27)

// Default: the newest according to your plan.
// language
// The 2-letter ISO-639-1 code of the language you want to get headlines for. Possible options: ardeenesfrheitnlnoptrusvudzh.

// Default: all languages returned.
// sortBy
// The order to sort the articles in. Possible options: relevancy, popularity, publishedAt.
// relevancy = articles more closely related to q come first.
// popularity = articles from popular sources and publishers come first.
// publishedAt = newest articles come first.

// Default: publishedAt
// pageSize
// int
// The number of results to return per page.

// Default: 100. Maximum: 100.
// page
// int
// Use this to page through the results.

// Default: 1.