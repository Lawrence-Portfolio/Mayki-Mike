<template>
  <nav class="header__bottom-nav header__nav">
    <ul>
      <li v-for="category in categories" :key="category.id">
        <nuxt-link
          class="nav-item link-hover"
          :to="{
            path: `/catalog/${category.alias}`,
            query: { categoryId: category.id }
          }"
        >{{ category.name }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  computed: {
    categories () {
      return this.$store.getters['categories/categories']
    }
  }
}
</script>
