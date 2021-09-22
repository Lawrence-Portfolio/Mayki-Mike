<template>
  <div class="nav-block">
    <div class="container">
      <ul>
        <li>
          <NuxtLink to="/">Главная</NuxtLink>
        </li>
        <li v-for="(item, index) in catalogCrumbs" :key="index">
          <NuxtLink :to="`${item.path}`">{{ item.name }}</NuxtLink>
        </li>
        <li v-for="(item, index) in crumbs" :key="index">
          <NuxtLink :to="`${item.path}`">{{ item.name }}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    crumbs: Array
  },
  computed: {
    catalogCrumbs () {
      const fullPath = this.$route.fullPath
      const params = fullPath.startsWith('/')
        ? fullPath.substring(1).split('/')
        : fullPath.split('/')
      const crumbs = []
      let path = ''
      console.log(params)
      params.forEach((param, index) => {
        if (param) {
          path = `${path}/${param}`
          const match = this.$router.match(path)
          const matchName = match.name
          const matchParams = match.params
          const crumb = {}
          console.log(matchName)
          if (matchName === 'catalog') {
            crumb.name = 'Товары'
            crumb.path = path
            crumbs.push(crumb)
          } else if (matchName === 'catalog-category') {
            crumb.name = this.$store.getters['categories/categories'].filter(item => item.alias === matchParams.category)[0].name
            crumb.path = path
            crumbs.push(crumb)
          } else if (matchName === 'catalog-category-collection') {
            crumb.name = this.$store.getters['collections/collections'].filter(item => item.alias === matchParams.collection)[0].name
            crumb.path = path
            crumbs.push(crumb)
          } else if (matchName === 'catalog-category-collection-card') {
            crumb.name = this.$store.getters['product-detail/product'].name
            crumb.path = path
            crumbs.push(crumb)
          } else if (matchName === 'collections') {
            crumb.name = 'Товары'
            crumb.path = path
            crumbs.push(crumb)
          } else if (matchName === 'collections-collection') {
            crumb.name = this.$store.getters['collections/collections'].filter(item => item.alias === matchParams.collection)[0].name
            crumb.path = path
            crumbs.push(crumb)
          }
        }
      })
      return crumbs
    }
  }
}
</script>
<style>
  .nav-block ul {
    display: flex;
    list-style-type: none;
  }
  .nav-block li:after {
    content: '/';
    color: #828282;
    margin: 0 5px;
  }
  .nav-block li:last-child:after {
    display: none;
  }
  .nav-block a[aria-current="page"] {
    cursor: default;
    color: #000;
  }
</style>
