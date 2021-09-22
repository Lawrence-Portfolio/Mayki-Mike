<template>
  <div class="goods__delivery">
    <h3 class="goods__subtitle">Доставка</h3>
    <div class="goods__delivery-wrapper">
      <div v-for="(item, index) in deliveryArray" :key="index" class="delivery-btn">
        <input
          :id="`delivery-${index}`"
          type="radio"
          name="delivery"
          :value="item.value"
          :checked="index == 0">
        <label
          id="courier-lable"
          :for="`delivery-${index}`">{{ item.name }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    deliveryArray: [
      {
        name: 'Курьером',
        value: 'Курьером'
      },
      {
        name: 'Самовывоз',
        value: 'Самовывоз'
      }
    ]
  })
}
</script>
