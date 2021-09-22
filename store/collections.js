import { uniqueArrayById } from '../helpers/uniqueArrayById'

export const state = () => ({
  coreCollections: [],
  collections: []
})
export const mutations = {
  GET_CORE_COLLECTIONS (state, payload) {
    state.coreCollections = payload
  },
  GET_COLLECTIONS (state, payload) {
    state.collections = payload
  }
}
export const actions = {
  async getCollection ({ commit }) {
    const res = await this.$axios.get('api/components/category-left')
    const collections = res.data.data.data
    const coreCollections = collections.filter(item => item.parent_category_id == null)

    commit('GET_COLLECTIONS', uniqueArrayById(collections))
    commit('GET_CORE_COLLECTIONS', uniqueArrayById(coreCollections))
  },
  getCollectionNameByAlias ({ state }, alias) {
    return state.collections.filter(item => item.alias === alias)[0].name
  }
}
export const getters = {
  coreCollections: state => state.coreCollections,
  collections: state => state.collections
}
