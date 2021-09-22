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
  computed: {
    products () {
      return this.$store.getters['products/products']
    }
  },
  async asyncData ({ query, store }) {
    store.commit('filter/updateCollectionId', Number(query.collectionId))
    await store.dispatch('products/getProducts')
  }
}
</script>
