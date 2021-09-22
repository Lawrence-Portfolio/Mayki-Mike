<template>
  <div class="cart__item">
    <div class="cloth-info">
      <img :src="item.image" alt="Футболка Likee">

      <div class="cloth-info__body">
        <h2 class="cloth-info__title">{{ item.name }} <span>{{ item.sex == 1 ? 'мужская' : 'женская' }}</span></h2>
        <p class="cloth-info__code">Артикул <span class="code">{{ item.artnumber }}</span></p>
        <a href="">printbar.ru</a>
      </div>
    </div>

    <div class="cloth-section">
      <div class="cloth-config">
        <p>Размер {{ item.size.latin }}</p>
        <p>{{ item.card.title }}</p>
        <p>{{ item.print.title }}</p>
      </div>

      <div class="counter counter_small">
        <button type="button" class="first-btn">-</button>
        <span id="order-count">{{ item.quantity }}</span>
        <button type="button" class="second-btn">+</button>
      </div>

      <div class="price">
        <span class="old">{{ item.price }} ₽</span>
        <span class="new">{{ item.d_price }} ₽</span>
      </div>

      <div class="buttons">
        <button @click="deleteCartItem(index)">
          <img src="@/assets/icons/delete.svg" alt="Remove">
        </button>
        <button>
          <img src="@/assets/icons/edit.svg" alt="Edit">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    index: Number
  },
  methods: {
    deleteCartItem (index) {
      this.$store.dispatch('cart/deleteCartItem', index)
      this.calculateCost()
    },
    calculateCost () {
      this.$emit('calculateCost')
    }
  }
}
</script>
