export const mutations = {
  ADD_CART_ITEM (state, payload) {
    this.state.localStorage.cart.push(payload)
  },
  DELETE_CART_ITEM (state, payload) {
    this.state.localStorage.cart.splice(payload, 1)
  },
  UPDATE_CART_PRICE (state, payload) {
    this.state.localStorage.cartPrice = payload
  },
  REMOVE_CART (state, payload) {
    this.state.localStorage.cart = []
  }
}
export const actions = {
  addCartItem ({ commit }, payload) {
    commit('ADD_CART_ITEM', payload)
  },
  deleteCartItem ({ commit }, payload) {
    this.state.localStorage.cart.forEach((elem, i) => {
      if (i === payload) {
        const item = this.state.localStorage.cart.indexOf(elem)
        commit('DELETE_CART_ITEM', item)
      }
    })
  },
  updateCartPrice ({ commit }) {
    const cartPrice = {
      total: 0,
      discount: 0,
      d_total: 0
    }
    this.state.localStorage.cart.forEach((item) => {
      cartPrice.total += item.price
      cartPrice.d_total += item.d_price
    })
    cartPrice.discount = cartPrice.total - cartPrice.d_total
    commit('UPDATE_CART_PRICE', cartPrice)
  },
  removeCart ({ commit }) {
    commit('REMOVE_CART')
  }
}
