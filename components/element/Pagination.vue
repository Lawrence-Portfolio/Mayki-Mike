<template>
  <div class="catalog__pagination pagination">
    <vue-ads-pagination
      :total-items="totalProducts / perpage"
      :page="page"
      :max-visible-pages="5"
    >
      <template
        slot="buttons"
        slot-scope="props"
      >
        <vue-ads-page-button
          v-for="(button, key) in props.buttons"
          :key="key"
          v-bind="button"
          :class="{ 'active': button.active }"
          @page-change="page = button.page"
          @range-change="start = button.start; end = button.end"
        />
      </template>
    </vue-ads-pagination>
  </div>
</template>

<script>
import VueAdsPagination, { VueAdsPageButton } from 'vue-ads-pagination'
export default {
  components: {
    VueAdsPagination,
    VueAdsPageButton
  },
  computed: {
    totalProducts () {
      return this.$store.getters['products/total']
    },
    perpage () {
      return this.$store.getters['filter/perpage']
    },
    page: {
      get () {
        return this.$store.getters['filter/page']
      },
      set (value) {
        this.$store.commit('filter/updatePage', value)
        this.$store.dispatch('products/getProducts')
      }
    }
  }
}
</script>

<style>
  .vue-ads-flex {
    display: flex;
    flex-wrap: wrap;

  }
  .vue-ads-leading-loose {
    display: none;
  }
  .pagination {
    justify-content: center;
  }
  .pagination button:disabled {
    background-color: transparent !important;
    cursor: default !important;
  }
  .pagination button[title="previous"],
  .pagination button[title="next"] {
    display: none;
  }

</style>
