<template>
  <div>
    <Breadcrumbs :crumbs="[{ name: pageTitle, path: pagePath }]"/>
    <section class="location">
      <div class="container">
        <h2 class="location__title">Где мой заказ?</h2>
        <form action="#" class="location__form" method="GET">
          <div class="location__wrapper">
            <div class="input-wrapper">
              <label for="orderNumber">Введите номер заказа <span>*</span></label>
              <input type="text" name="orderNumber" id="orderNumber">
            </div>

            <div class="input-wrapper">
              <label for="telNumber">Введите номер телефона <span>*</span></label>
              <input type="text" name="telNumber" id="telNumber">
            </div>
          </div>

          <div class="location__checkbox-wrapper">
            <input type="checkbox" name="agree" id="agree">
            <label for="agree">
              Заполняя эту форму вы соглашаетесь с обработкой персональных данных согласно
              <a href="#" target="_blank">пользовательского соглашения</a>
            </label>
          </div>

          <button class="main-btn" type="submit">Отследить</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import Breadcrumbs from '@/components/element/Breadcrumbs'
export default {
  layout: 'default',
  components: {
    Breadcrumbs
  },
  head () {
    return {
      title: this.pageTitle
    }
  },
  data: () => ({
    pageTitle: 'Где мой заказ?',
    pagePath: '/location'
  })
}
</script>
