<template>
  <div>
    <Breadcrumbs :crumbs="[{ name: pageTitle, path: pagePath }]"/>
    <main class="faq">
      <div class="container">
        <h2 class="faq__title">
          FAQ
        </h2>
        <button class="accordion">Доставка</button>
        <div class="panel">
          <p>Lorem ipsum...</p>
        </div>

        <button class="accordion">Оплата</button>
        <div class="panel">
          <p>Lorem ipsum...</p>
        </div>

        <button class="accordion">Акции и купоны</button>
        <div class="panel">
          <p>Lorem ipsum...</p>
        </div>

        <button class="accordion">Оформление заказа</button>
        <div class="panel">
          <p>Lorem ipsum...</p>
        </div>

        <button class="accordion">Отказ от заказа</button>
        <div class="panel">
          <p>Lorem ipsum...</p>
        </div>

        <button class="accordion">Обмен и возврат</button>
        <div class="panel">
          <p>Lorem ipsum...</p>
        </div>

        <button class="accordion">Индивидуальный дизайн</button>
        <div class="panel">
          <p>Lorem ipsum...</p>
        </div>

        <button class="accordion">Производство</button>
        <div class="panel">
          <p>Lorem ipsum...</p>
        </div>
      </div>
    </main>
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
    pageTitle: 'FAQ',
    pagePath: '/faq'
  })
}
</script>
