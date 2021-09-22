export const state = () => ({
  product: {},
  genderProducts: {},
  loading: false
})
export const mutations = {
  GET_PRODUCT (state, payload) {
    state.product = payload
  },
  GET_GENDER_PRODUCTS (state, payload) {
    state.genderProducts = payload
  },
  SET_LOADING (state, payload) {
    state.loading = payload
  },
  UPDATE_PRODUCT_DETAIL (state, payload) {
    state.product = payload
  }
}
export const actions = {
  async getProductDetail ({ commit, dispatch }, payload) {
    const params = new URLSearchParams()
    params.append('alias', payload)
    commit('SET_LOADING', true)
    try {
      const res = await this.$axios.get('/api/products/detail?' + params)
      const resGender = await dispatch('getGenderProducts', res.data.data[0].id)
      commit('GET_PRODUCT', res.data.data[0])
      commit('GET_GENDER_PRODUCTS', resGender.data.data)
      commit('SET_LOADING', false)
    } catch (e) {
      commit('SET_LOADING', false)
      console.log(e)
    }
  },
  async getGenderProducts ({ commit }, id) {
    const params = new URLSearchParams()
    params.append('id', id)
    try {
      return await this.$axios.get('/api/products/genderSwitcherSlider?' + params)
    } catch (e) {
      console.log(e)
    }
  }
}
export const getters = {
  product: state => state.product,
  genderProducts: state => state.genderProducts,
  loading: state => state.loading
}
