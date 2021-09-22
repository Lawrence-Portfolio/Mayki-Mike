<template>
  <div>
    <Breadcrumbs :crumbs="[{ name: pageTitle, path: pagePath }]"/>
    <section class="cart">
      <div class="container">
        <div v-if="cart.length != 0" class="cart__wrapper">
          <div class="cart__items-list">
            <CartCard
              v-for="(item, index) in cart"
              :key="item.id"
              :item="item"
              :index="index"
              @calculateCost="calculateCost"/>
          </div>
          <div class="cart__aside-info">
            <div class="cart__aside-top">
              <p class="cart__aside-title">У Вас есть промокод?</p>
              <input type="text" name="promo" id="promo" placeholder="Введите промокод">
            </div>
            <div class="cart__aside-body">
              <div class="line">
                <p class="text">Общая сумма</p>
                <p class="sum">{{ cartPrice.total }}₽</p>
              </div>
              <div class="line">
                <p class="text">Скидка</p>
                <p class="discount">{{ cartPrice.discount }}₽</p>
              </div>
              <div class="line">
                <p class="text text_big">Итого</p>
                <p class="total">{{ cartPrice.d_total }}₽</p>
              </div>
            </div>

            <NuxtLink to="/checkout" class="main-btn cart__aside-btn">Оформить заказ</NuxtLink>
          </div>
        </div>
        <div v-else class="cart__wrapper">
          <p>В корзине нет товаров</p>
        </div>
      </div>

      <div class="cart__mobile">
        <div class="cart__mobile-info">
          <div class="order__bottom-text">
            Сумма к оплате:
            <span class="calc">
              12 569 (<span class="discount">-2569₽</span> скидка)<span class="total">10000₽</span>
          </span>
          </div>
          <div class="cart__mobile-btn">
            <a href="#" class="main-btn cart__continue-btn">Продолжить покупки</a>
            <a href="#" class="main-btn cart__aside-btn">Оформить заказ</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Breadcrumbs from '@/components/element/Breadcrumbs'
import CartCard from '@/components/cart/CartCard'
export default {
  layout: 'default',
  components: {
    CartCard,
    Breadcrumbs
  },
  head () {
    return {
      title: this.pageTitle
    }
  },
  data: () => ({
    pageTitle: 'Корзина',
    pagePath: '/cart',
    totalPrice: 0,
    d_totalPrice: 0,
    discountPrice: 0
  }),
  computed: {
    cart () {
      return this.$store.getters['localStorage/cart']
    },
    cartPrice () {
      return this.$store.getters['localStorage/cartPrice']
    }
  },
  methods: {
    calculateCost () {
      this.$store.dispatch('cart/updateCartPrice')
    }
  },
  created () {
    this.calculateCost()
  }
}
</script>
