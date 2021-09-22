<template>
  <div class="goods__aside-info">
    <!--          <div class="goods__clothes-slider">-->
    <!--            <button class="slider__btn left-btn"></button>-->
    <!--            <button class="slider__btn right-btn"></button>-->
    <!--            <div class="slide">-->
    <!--              <div class="slide__header">-->
    <!--                <a href="#"><img src="@/assets/icons/like.svg" alt="Select"></a>-->
    <!--                <div class="slide__discount">-30%</div>-->
    <!--              </div>-->
    <!--              <img src="@/assets/images/clothes/cloth9.png" alt="Футболка">-->
    <!--            </div>-->
    <!--          </div>-->
    <ProductSlider :slides="[{ src: product.image }, { src: product.imageHover }]"/>
    <div class="goods__gender">
      <div class="gender-btn" v-if="genderProducts[1].filter(i => i.category.id == categoryId).length != 0">
        <input
          v-model.number="sex"
          id="male"
          type="radio"
          name="gender"
          value="1"
          @change="updateProductDetail(uniqueArrayByCategoryId(genderProducts[sex]).filter(i => i.category.id == categoryId)[0])">
        <label for="male">Мужская</label>
      </div>

      <div class="gender-btn" v-if="genderProducts[2].filter(i => i.category.id == categoryId).length != 0">
        <input
          v-model.number="sex"
          id="female"
          type="radio"
          name="gender"
          value="2"
          @change="updateProductDetail(uniqueArrayByCategoryId(genderProducts[sex]).filter(i => i.category.id == categoryId)[0])">
        <label for="female">Женская</label>
      </div>
    </div>

    <div class="select-wrapper">
      <select
        v-model.number="sex"
        name="gender"
        id="gender-select"
        @select="updateProductDetail(uniqueArrayByCategoryId(genderProducts[sex]).filter(i => i.category.id == categoryId)[0])">
        <option v-if="genderProducts[1].filter(i => i.category.id == categoryId).length != 0" value="1">Мужская</option>
        <option v-if="genderProducts[2].filter(i => i.category.id == categoryId).length != 0" value="2">Женская</option>
      </select>
    </div>
    <div class="cloth-type">
      <div v-for="item in uniqueArrayByCategoryId(genderProducts[sex])" :key="item.id" class="type-btn">
        <input
          v-model.number="categoryId"
          :id="item.category.name"
          type="radio"
          name="cloth-type"
          :value="item.category.id"
          :checked="product.category.id === item.category.id"
          @change="updateProductDetail(item)">
        <label :for="item.category.name">
          <img v-if="item.category.name == 'Худи'" src="@/assets/icons/types/hoodie.svg" alt="Худи">
          <img v-else-if="item.category.name == 'Свитшоты'" src="@/assets/icons/types/sweatshirt.svg" alt="Худи">
          <img v-else-if="item.category.name == 'Футболки'" src="@/assets/icons/types/shirt.svg" alt="Худи">
          <span>{{ item.category.name }}</span>
        </label>
      </div>
    </div>

    <div class="feedback">
      <h4 class="goods__subtitle">Отзывы</h4>

      <div class="feedback__slider">
        <button class="slider__btn left-btn"></button>
        <button class="slider__btn right-btn"></button>
        <div class="slide">
          <div class="slide__header">
            <div class="stars">
              <img src="@/assets/icons/star.svg" alt="star">
              <img src="@/assets/icons/star.svg" alt="star">
              <img src="@/assets/icons/star.svg" alt="star">
              <img src="@/assets/icons/star.svg" alt="star">
            </div>

            <div class="author">
              <span class="name">Мария</span>
              <span class="date">26.04.2021</span>
              <span class="time">11:00</span>
            </div>
          </div>

          <div class="slide__text">
            Заказал футболку, доставили быстро, качество супер!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { uniqueArrayByCategoryId } from '@/helpers/uniqueArrayByCategoryId'
import ProductSlider from '@/components/element/slider/ProductSlider'
export default {
  data: () => ({
    sex: 0,
    categoryId: 0
  }),
  components: {
    ProductSlider
  },
  props: {
    product: Object,
    genderProducts: Object
  },
  methods: {
    uniqueArrayByCategoryId (array) {
      return uniqueArrayByCategoryId(array)
    },
    updateProductDetail (payload) {
      this.$store.commit('product-detail/UPDATE_PRODUCT_DETAIL', payload)
    }
  },
  created () {
    this.sex = this.product.sex
    this.categoryId = this.product.category.id
  }
}
</script>
