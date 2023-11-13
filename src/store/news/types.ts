export type CategoryType =
	| 'Breaking News'
	| 'Funny'
	| 'Shock'
	| 'Family'
	| 'Road'
	| 'Road Accident'

export interface INews {
	id: number
	title: string
	description: string
	images: string[]
	topic: string
	tags: string[]
	views: number
	category: CategoryType
	comments: string[]
	date: Date
	text: string
	author: string
}

export interface INewsStore {
	news: INews[]
	count: number
}
