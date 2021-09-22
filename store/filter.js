export const state = () => ({
  page: 0,
  perpage: 20,
  sortBy: 'rating',
  favorite: false,
  categoryId: 0,
  collectionId: 0,
  sex: 0
})
export const mutations = {
  updateSex (state, payload) {
    state.sex = payload
  },
  updateCategoryId (state, payload) {
    if (payload === -1 || payload === -2) { // Если id категории относится к мужчинам или женщинам
      state.sex = Math.abs(payload)
      state.categoryId = 0
    } else {
      state.categoryId = payload
    }
  },
  updateSortBy (state, payload) {
    state.sortBy = payload
  },
  updatePage (state, payload) {
    state.page = payload
  },
  updatePerpage (state, payload) {
    state.perpage = payload
  },
  updateCollectionId (state, payload) {
    state.collectionId = payload
  }
}
export const getters = {
  sex: state => state.sex,
  categoryId: state => state.categoryId,
  page: state => state.page,
  sortBy: state => state.sortBy,
  perpage: state => state.perpage,
  collectionId: state => state.collectionId
}
