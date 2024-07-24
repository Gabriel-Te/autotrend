import { create } from 'zustand'

const useNewsStore = create(set => ({
    news: [],


    setNews: (newsData) => set({ news: newsData }),
    addNews: (newNews) => set((state) => ({ news: [...state.news, newNews] })),
    //removeNews: (newsId) => set((state) => ({news : state.news.filter(newsId => state.news.id_noticia !== newsId)})),
}));

export default useNewsStore