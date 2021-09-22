<template>
  <div>
    <Breadcrumbs :crumbs="[{ name: pageTitle, path: pagePath }]"/>
    <main class="details">
      <div class="container">
        <h2 class="details__title info-title">
          Реквизиты
        </h2>
        <p class="details__text">
          Услуги оказывает: Индивидуальный <wbr> предприниматель <wbr> Лесной Артём Витальевич
        </p>
        <p class="details__text">
          ИНН: 312012037564
        </p>
        <p class="details__text">
          Расчётный №40802810010050089290
        </p>
        <p class="details__text">
          Название банка: Ф ТОЧКА БАНК КИВИ <wbr> БАНК (АО)
        </p>
        <p class="details__text">
          БИК: 044525797
        </p>
        <p class="details__text">
          Город: г. Москва
        </p>
        <p class="details__text">
          Корр. счет: 30101810445250000797
        </p>
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
    pageTitle: 'Реквизиты',
    pagePath: '/detalis'
  })
}
</script>
