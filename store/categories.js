export const state = () => ({
  categories: []
})
export const mutations = {
  GET_CATEGORIES (state, payload) {
    state.categories = payload
  }
}
export const actions = {
  async getCategories ({ commit }) {
    const res = await this.$axios.get('api/components/category')
    commit('GET_CATEGORIES', res.data.data.data)
  },
  getCategoryNameByAlias ({ state }, alias) {
    return state.categories.filter(item => item.alias === alias)[0].name
  }
}
export const getters = {
  categories: state => state.categories
}
