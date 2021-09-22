<template>
  <div class="cloth-item">
    <div class="cloth-item__header">
      <a href="#">
        <img src="@/assets/icons/like.svg" alt="Select">
      </a>
      <div class="cloth-item__discount">-30%</div>
    </div>
    <div class="cloth-item__body">
      <img :src="product.image" :alt="product.category.name">
      <NuxtLink class="cloth-item__hover-link" :to="`/catalog/${product.category.alias}/${product.collection.alias}/${product.alias}`">
        <img :src="product.imageHover" :alt="product.category.name">
      </NuxtLink>
      <h5 class="cloth-item__body-title">{{ product.name }}</h5>
    </div>
    <div class="cloth-item__footer">
      <a href="#" class="cloth-item__footer-link">printbar.ru</a>
      <p class="cloth-item__footer-type">
        {{ declinationCategories[product.sex][product.category.alias] }}
      </p>
      <div class="cloth-item__price">
        <span class="old-price">{{ product.price }}</span>
        <span class="new-price">{{ product.d_price }} руб.</span>
      </div>
      <a href="#" class="main-btn cloth-item__btn">Беру</a>
    </div>
  </div>
</template>
<script>

import { declinationCategories } from '@/data/declinationCategories'
export default {
  props: {
    product: Object
  },
  computed: {
    declinationCategories () {
      return declinationCategories
    }
  }
}
</script>
<style>
  .cloth-item__hover-link {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }
  .cloth-item__hover-link:hover {
    opacity: 1;
  }
  .cloth-item__header {
    z-index: 1;
  }
</style>
