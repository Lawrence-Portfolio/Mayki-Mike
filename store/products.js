export const state = () => ({
  products: [],
  total: 0,
  loading: false
})
export const mutations = {
  GET_PRODUCTS (state, payload) {
    state.products = payload
  },
  UPDATE_TOTAL (state, payload) {
    state.total = payload
  },
  SET_LOADING (state, payload) {
    state.loading = payload
  }
}
export const actions = {
  async getProducts ({ commit }) {
    const params = new URLSearchParams()
    const filterState = this.state.filter
    const filterKeysArray = Object.keys(filterState)
    for (let i = 0; i < filterKeysArray.length; i++) {
      const key = filterKeysArray[i]
      const value = filterState[key]
      if (key === 'sortBy') {
        if (value !== '') {
          params.append('sort_by[]', value)
        }
      } else if (key === 'categoryId') {
        if (value !== 0) {
          params.append('category_id', value)
        }
      } else if (key === 'collectionId') {
        if (value !== 0) {
          params.append('collection', value)
        }
      } else if (key === 'page') {
        params.append('page', value + 1) // минимальное значение для запроса - 1
      } else if (value !== 0 || value) {
        params.append(key, value)
      }
    }
    commit('SET_LOADING', true)
    try {
      const res = await this.$axios.get('/api/products?' + params)
      commit('SET_LOADING', false)
      commit('UPDATE_TOTAL', res.data.total)
      commit('GET_PRODUCTS', res.data.data)
    } catch (e) {
      commit('SET_LOADING', false)
    }
  }
}
export const getters = {
  products: state => state.products,
  total: state => state.total,
  loading: state => state.loading
}
