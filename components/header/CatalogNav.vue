<template>
  <nav class="header__catalog__menu hidden">
    <ul class="header__catalog__menu-list">
      <li
        v-for="collection in coreCollections"
        :key="collection.id"
        class="header__catalog__menu-list-item">
        <a href="#">{{ collection.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    coreCollections () {
      return this.$store.getters['collections/coreCollections']
    }
  }
}
</script>
