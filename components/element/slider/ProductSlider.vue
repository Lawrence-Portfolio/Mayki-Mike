<template>
  <div class="goods__clothes-slider">
    <button @click="$refs.carousel.prev()" class="slider__btn left-btn"></button>
    <button @click="$refs.carousel.next()" class="slider__btn right-btn"></button>
    <VueSlickCarousel v-bind="settings" ref="carousel">
      <div v-for="(slide, index) in slides" :key="index">
        <div class="slide">
          <div class="slide__header">
            <a href="#"><img src="@/assets/icons/like.svg" alt="Select"></a>
            <div class="slide__discount">-30%</div>
          </div>
          <img :src="slide.src" alt="Футболка">
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
export default {
  data: () => ({
    settings: {
      lazyLoad: 'ondemand',
      arrows: false,
      dots: false
    }
  }),
  props: {
    slides: Array
  }
}
</script>
