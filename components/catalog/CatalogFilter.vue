<template>
  <div class="catalog-search">
    <form class="catalog-search__form" ref="catalogFilter">
      <div class="select-container">
        <label for="gender-select">Пол</label>
        <select v-model.number="sex" name="gender" id="gender-select">
          <option value="0">Не выбрано</option>
          <option value="1">Мужской</option>
          <option value="2">Женский</option>
        </select>
        <div class="option-container hidden">
          <div class="option option_active" data-for="gender-select" data-value="не выбрано">не выбрано</div>
          <div class="option" data-for="gender-select" data-value="мужской">мужской</div>
          <div class="option" data-for="gender-select" data-value="женский">женский</div>
        </div>
      </div>

      <div class="select-container">
        <label for="category-select">Категория</label>
        <select v-model.number="categoryId" name="category" id="category-select">
          <option value="0">Не выбрано</option>
          <template v-for="category in categories">
            <option
              v-if="category.id != -1 && category.id != -2"
              :key="category.id"
              :value="category.id">
              {{ category.name }}</option>
          </template>
        </select>
        <div class="option-container hidden">
          <div class="option" data-for="category-select" data-value="не выбрано">не выбрано</div>
          <div class="option" data-for="category-select" data-value="категория 2">категория 2</div>
          <div class="option option_active" data-for="category-select" data-value="категория 3">категория 3</div>
          <div class="option" data-for="category-select" data-value="категория 4">категория 4</div>
        </div>
      </div>

      <div class="select-container">
        <label for="sort-select">Сортировать по</label>
        <select v-model="sortBy" name="sort" id="sort-select">
          <option value="rating">рейтингу</option>
          <option value="created_at">новизне</option>
        </select>
        <div class="option-container hidden">
          <div class="option option_active" data-for="sort-select" data-value="цене">цене</div>
          <div class="option" data-for="sort-select" data-value="популярности">популярности</div>
        </div>
      </div>
    </form>

    <a href="#" class="catalog-col-btn colection-btn">
      <img src="@/assets/icons/collections.svg" alt="Коллекции">
      <p>Коллекции</p>
    </a>

    <a href="#" class="catalog-filter-btn filter-btn">
      <img src="@/assets/icons/filters.svg" alt="Фильтры">
      <p>Фильтры</p>
    </a>
    <div class="catalog-show count-show">
      Показать
      <select v-model.number="perpage" name="perpage" id="perpage-select">
        <option value="20">20</option>
        <option value="40">40</option>
        <option value="60">60</option>
      </select>
    </div>
<!--    <a href="#" class="catalog-show count-show">Показать <span id="show-count">20</span></a>-->
  </div>
</template>

<script>
export default {
  computed: {
    categories () {
      return this.$store.getters['categories/categories']
    },
    sex: {
      get () {
        return this.$store.getters['filter/sex']
      },
      set (value) {
        this.$store.commit('filter/updateSex', value)
        this.$store.dispatch('products/getProducts')
      }
    },
    categoryId: {
      get () {
        return this.$store.getters['filter/categoryId']
      },
      set (value) {
        this.$store.commit('filter/updateCategoryId', value)
        this.$store.dispatch('products/getProducts')
      }
    },
    sortBy: {
      get () {
        return this.$store.getters['filter/sortBy']
      },
      set (value) {
        this.$store.commit('filter/updateSortBy', value)
        this.$store.dispatch('products/getProducts')
      }
    },
    perpage: {
      get () {
        return this.$store.getters['filter/perpage']
      },
      set (value) {
        this.$store.commit('filter/updatePerpage', value)
        this.$store.dispatch('products/getProducts')
      }
    }

  }
}
</script>
