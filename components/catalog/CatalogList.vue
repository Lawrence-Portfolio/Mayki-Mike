<template>
  <aside class="catalog">
    <h2 class="section-title">
      каталог
    </h2>
    <ul class="catalog__list">
      <CatalogItem
        v-for="collection in coreCollections"
        :key="collection.id"
        :collection="collection"
        :childrenCollections="collections.filter(item => item.parent_category_id === collection.id)"
        :categoryAlias="categoryAlias"/>
    </ul>
  </aside>
</template>

<script>
import CatalogItem from '@/components/catalog/CatalogItem'
export default {
  props: {
    categoryAlias: String,
    default: null
  },
  components: {
    CatalogItem
  },
  computed: {
    coreCollections () {
      return this.$store.getters['collections/coreCollections']
    },
    collections () {
      return this.$store.getters['collections/collections']
    }
  },
  methods: {
    filterCollections (id) {
      return this.collections.filter(item => item.parent_category_id === id)
    }
  }
}
</script>
