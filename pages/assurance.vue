<template>
  <div>
    <Breadcrumbs :crumbs="[{ name: pageTitle, path: pagePath }]"/>
    <main class="assurance">
      <div class="container">
        <h2 class="assurance__title">
          Обмен и возврат
        </h2>
        <p class="assurance__head-text">
          Если вы получили товар ненадлежащего качества:
        </p>
        <p class="assurance__head-text">
          Мы приносим свои извинения и готовы обменять вам товар или вернуть деньги.
        </p>

        <ul class="assurance__list">
          <li class="assurance__list-item">
            <a href="">
              Заполните форму
            </a>
          </li>
          <li class="assurance__list-item">
            В течение 5 дней мы обязательно свяжемся с вами, заменим товар или вернем деньги.
          </li>
          <li class="assurance__list-item">
            Обращения принимаются в течение 30 дней с момента получения заказа.
          </li>
        </ul>

        <p class="assurance__small-text">
          Все расходы по обмену и возврату бракованного товара мы берем на себя.
        </p>

        <p class="assurance__head-text">
          Если вы ошиблись с выбором:
        </p>

        <ul class="assurance__list">
          <li class="assurance__list-item">
            <a href="">
              Заполните форму
            </a>
          </li>
          <li class="assurance__list-item">
            В течение 5 дней мы обязательно свяжемся с вами и согласуем процедуру обмена.
          </li>
          <li class="assurance__list-item">
            Обращения принимаются в течение 7 дней с момента получения заказа.
          </li>
        </ul>

        <p class="assurance__head-text mt_29">
          Если вы передумали:
        </p>

        <ul class="assurance__list">
          <li class="assurance__list-item">
            Напишите нам на электронный адрес: <a class="assurance__mail" href="mailto:service@vsemayki.ru">service@vsemayki.ru</a> и в теме письма укажите номер Вашего заказа.
          </li>
          <li class="assurance__list-item">
            Мы свяжемся с вами и вернем деньги.
          </li>
          <li class="assurance__list-item">
            Обращения принимаются в течение 7 дней с момента получения заказа.
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>
<script>
import Breadcrumbs from '@/components/element/Breadcrumbs'
export default {
  data: () => ({
    pageTitle: 'Обмен и возврат',
    pagePath: '/assurance'
  }),
  head () {
    return {
      title: this.pageTitle
    }
  },
  components: {
    Breadcrumbs
  },
  layout: 'default'
}
</script>
