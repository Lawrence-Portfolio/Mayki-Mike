export const actions = {
  async nuxtServerInit ({ dispatch }) {
    await dispatch('categories/getCategories')
    await dispatch('collections/getCollection')
  }
}
