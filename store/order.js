export const mutations = {
  SET_ORDER (state, payload) {
    this.state.localStorage.order = payload
    this.state.localStorage.cart = []
  }
}

export const actions = {
  async createOrder ({ commit, dispatch }, payload) {
    console.log()
    const params = new URLSearchParams()
    const info = {
      firstName: payload.firstName,
      lastName: payload.lastName,
      email: payload.email,
      phone: payload.phone,
      items: this.state.localStorage.cart,
      ip: '213.87.127.244',
      cpaHash: null,
      cpa: {
        cpaHash: null,
        utmSource: null,
        utmContent: null,
        utmCampaign: null,
        utmTerm: null,
        sub1: null,
        sub2: null,
        sub3: null,
        sub4: null
      },
      delivery: {
        type: 'delivery',
        delivery_price: 200
      },
      price: this.state.localStorage.cartPrice.d_total,
      payment: payload.payment
    }
    params.append('info', JSON.stringify(info))
    const res = await this.$axios.$post('api/orders/create?', params)
    console.log(res)
    commit('SET_ORDER', {
      token: res.data.token,
      order_id: res.data.order_id,
      price: this.state.localStorage.cartPrice.d_total
    })
    this.$router.push('/success')
  }
}

export const getters = {
  order: state => state.order
}
