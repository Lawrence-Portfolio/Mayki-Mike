<template>
  <div class="goods__select-group">
    <div class="goods__select">
      <h4 class="goods__select-title">Тип ткани</h4>
      <div class="goods__select-wrapper">
        <div v-for="(item, index) in productTypeCloth[productCategoryAlias]" :key="index" class="radio-btn">
          <input
            :id="`cloth-${index}`"
            type="radio"
            name="cloth"
            :value="item.value"
            :checked="index == 0"
            @input="updateTypeCloth(item)">
          <label
            :for="`cloth-${index}`">{{ item.title }} <br> +{{ item.price }} Р</label>
        </div>
      </div>
    </div>
    <div class="goods__select">
      <h4 class="goods__select-title">Тип печати</h4>
      <div class="goods__select-wrapper">
        <div v-for="(item, index) in productTypePrint" :key="index" class="radio-btn">
          <input
            :id="`print-${index}`"
            type="radio"
            name="print"
            :value="item.value"
            :checked="index == 0"
            @input="updateTypePrint(item)">
          <label
            :for="`print-${index}`">{{ item.title }} <br> +{{ item.price }} Р</label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    sizeData: Object,
    productCategoryAlias: String,
    productTypePrint: Array,
    productTypeCloth: Object
  },
  methods: {
    updateTypeCloth (payload) {
      this.$emit('updateTypeCloth', payload)
    },
    updateTypePrint (payload) {
      this.$emit('updateTypePrint', payload)
    }
  }
}
</script>
