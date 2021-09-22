<template>
  <div class="goods__size">
    <h4 class="goods__size-title">Выберите размер</h4>
    <div class="goods__size-flex">
      <div class="goods__size-wrapper">
        <template v-for="(item, index) in sizesDataArray">
          <template>
            <div
              v-if="item[sex][productCategoryAlias]"
              :key="index"
              class="size-btn">
              <template v-if="item[sex][productCategoryAlias]">
                <input
                  :id="item.latin"
                  type="radio"
                  name="size"
                  :value="item.latin"
                  @input="updateSizeData(item)"
                  :checked="item.latin == sizeData.latin">
                <label
                  :for="item.latin">{{ item.latin }}</label>
              </template>
            </div>
          </template>
        </template>

      </div>
      <button class="goods__open-table" @click="showTable">Таблица размеров</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    sizeData: Object,
    productCategoryAlias: String,
    sex: String,
    sizesDataArray: Array
  },
  methods: {
    updateSizeData (item) {
      this.$emit('updateSizeData', item)
    },
    showTable () {
      this.$emit('showTable')
    }
  }
}
</script>
