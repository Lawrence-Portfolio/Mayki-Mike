<template>
  <div>
    <Breadcrumbs/>
    <div class="catalog-page">
      <div class="container container_content">
        <CatalogList/>
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
    store.commit('filter/updateCategoryId', 0)
    await store.dispatch('products/getProducts')
  }
}
</script>
