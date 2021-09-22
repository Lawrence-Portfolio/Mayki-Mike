<template>
  <div class="counter">
    <button type="button" class="first-btn" @click="decrement">-</button>
    <span id="order-count">{{ quantity }}</span>
    <button type="button" class="second-btn" @click="increment">+</button>
  </div>
</template>

<script>
export default {
  props: {
    quantity: Number
  },
  methods: {
    increment () {
      this.updateQuantity(this.quantity + 1)
    },
    decrement () {
      if (this.quantity > 1) {
        this.updateQuantity(this.quantity - 1)
      }
    },
    updateQuantity (quantity) {
      this.$emit('updateQuantity', quantity)
    }
  }
}
</script>
