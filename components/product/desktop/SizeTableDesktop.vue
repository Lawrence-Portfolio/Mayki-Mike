<template>
  <div class="size-table">
    <div class="lables">
      <p>EUR</p>
      <p>RUS</p>
      <p>Обхват груди</p>
      <p>Обхват талии</p>
      <p>Ширина</p>
      <p>Ширина спинки</p>
      <p>Ширина плеч</p>
    </div>
    <template v-for="item in sizesDataArray">
      <div
        v-if="item[sex][productCategoryAlias]"
        :key="item.latin"
        :class="['choose', { active: item.latin == sizeData.latin }]"
        @click="updateSizeData(item)">
        <template v-if="item[sex][productCategoryAlias]">
          <p>{{ item.latin }}</p>
          <p>{{ item.number[sex] }}</p>
          <p>{{ item[sex][productCategoryAlias].chest }}</p>
          <p>{{ item[sex][productCategoryAlias].hip }}</p>
          <p>{{ item[sex][productCategoryAlias].width }}</p>
          <p>{{ item[sex][productCategoryAlias].length }}</p>
          <p>{{ item[sex][productCategoryAlias].width_shoulder }}</p>
        </template>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    sizeData: Object,
    sex: String,
    productCategoryAlias: String,
    sizesDataArray: Array
  },
  methods: {
    updateSizeData (size) {
      this.$emit('updateSizeData', size)
    }
  }
}
</script>
