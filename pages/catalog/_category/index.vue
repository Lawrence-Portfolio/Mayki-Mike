<template>
  <div>
    <Breadcrumbs/>
    <div class="catalog-page">
      <div class="container container_content">
        <CatalogList :categoryAlias="$route.params.category"/>
        <CatalogMain/>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '@/components/element/Breadcrumbs'
import CatalogList from '@/components/catalog/CatalogList'
import CatalogMain from '@/components/catalog/CatalogMain'
export default {
  components: {
    Breadcrumbs,
    CatalogList,
    CatalogMain
  },
  async asyncData ({ query, store }) {
    store.commit('filter/updateCollectionId', 0)
    store.commit('filter/updateSex', 0)
    store.commit('filter/updateCategoryId', Number(query.categoryId))
    await store.dispatch('products/getProducts')
  }
}
</script>
