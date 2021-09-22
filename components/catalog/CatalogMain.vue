<template>
  <article class="catalog-main">
    <CatalogFilter/>
    <template v-if="!productsLoading">
      <div class="catalog__clothes">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
      <a href="#" class="catalog__show-more">Показать ещё</a>
      <button @click.prevent="" class="catalog__up up-btn"></button>
      <Pagination/>
    </template>
    <Loading v-else/>
  </article>
</template>

<script>
import ProductCard from '@/components/product/ProductCard'
import CatalogFilter from '@/components/catalog/CatalogFilter'
import Pagination from '@/components/element/Pagination'
import Loading from '@/components/element/Loading'
export default {
  components: {
    ProductCard,
    CatalogFilter,
    Pagination,
    Loading
  },
  computed: {
    products () {
      return this.$store.getters['products/products']
    },
    productsLoading () {
      return this.$store.getters['products/loading']
    }
  }
}
</script>
