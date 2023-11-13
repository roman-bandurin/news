import { acceptHMRUpdate, defineStore } from 'pinia'
import { INews, type INewsStore } from './types'

export const useNewsStore = defineStore({
	id: 'news',
	state: () => ({} as INewsStore),
	getters: {
		count: (state): number => state.count,

		byId:
			state =>
			(id: number): INews | undefined =>
				state.news.find(item => item.id === id),

		byTitle:
			state =>
			(title: string): INews | undefined =>
				state.news.find(item => item.title.includes(title)),

		items: (state): INews[] => state.news,
	},
	actions: {
		addNews(news: INews) {
			this.news.push(news)
		},

		removeItem(id: number) {
			const index = this.news.lastIndexOf(this.news[id])
			if (index > -1) this.news.splice(index, 1)
		},
		async setNews() {
			try {
				this.$state = await ({} as INewsStore)
			} catch (e) {
				return e
			}
		},
		getNews: async (payload: any) => {
			//action
		},
	},
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useNewsStore, import.meta.hot))
}
