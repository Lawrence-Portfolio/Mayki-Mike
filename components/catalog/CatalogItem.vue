<template>
  <li class="catalog__list-item" @mouseenter="isHiddenSubmenu = false" v-mouseout-outside="hideSubMenu">
    <NuxtLink
      v-if="categoryAlias"
      :to="{ path: `/catalog/${categoryAlias}/${collection.alias}`, query: { collectionId: collection.id } }"
    >{{ collection.name }}</NuxtLink>
    <NuxtLink
      v-else
      :to="{ path: `/collections/${collection.alias}`, query: { collectionId: collection.id } }"
    >
      {{ collection.name }}
    </NuxtLink>
    <div v-if="childrenCollections.length != 0" :class="['catalog__submenu', { hidden: isHiddenSubmenu }]">
      <h4 class="catalog__submenu-title">{{ collection.name }}</h4>
      <div class="catalog__submenu-wrapper">
        <ul class="catalog__submenu-list">
          <li
            v-for="childCollection in childrenCollections"
            :key="childCollection.id"
            class="catalog__submenu-list-item">
            <NuxtLink
              v-if="categoryAlias"
              :to="{ path: `/catalog/${categoryAlias}/${childCollection.alias}`, query: { collectionId: childCollection.id } }"
            >{{ childCollection.name }}</NuxtLink>
            <NuxtLink
              v-else
              :to="{ path: `/collections/${childCollection.alias}`, query: { collectionId: childCollection.id }  }"
            >{{ childCollection.name }}
            </NuxtLink>
            </li>
        </ul>
      </div>
    </div>
  </li>
</template>
<script>

export default {
  data: () => ({
    itemsPerUl: 2,
    isHiddenSubmenu: true
  }),
  props: {
    collection: Object,
    childrenCollections: Array,
    categoryAlias: {
      type: String,
      default: null
    }
  },
  methods: {
    hideSubMenu () {
      this.isHiddenSubmenu = true
    }
  }
}
</script>

<style>
  .catalog__submenu-list {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
</style>
