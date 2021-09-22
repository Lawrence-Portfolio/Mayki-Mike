export const state = () => ({
  cart: [],
  cartPrice: {
    total: 0,
    discount: 0,
    d_total: 0
  },
  order: {}
})

export const getters = {
  cart: state => state.cart,
  cartPrice: state => state.cartPrice
}
