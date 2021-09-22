<template>
  <div>
    <Breadcrumbs :crumbs="[{ name: pageTitle, path: pagePath }]"/>
    <section class="thanks">
      <div class="container">
        <img src="@/assets/icons/box.svg" alt="" class="thanks__img">
        <h2 class="thanks__title section-title">СПАСИБО ЗА ВАШ ЗАКАЗ</h2>
        <div class="thanks__body">
          <p class="thanks__text">Наши менеджеры свяжутся с вами в течение 15 минут для подтверждения заказа и согласования времени доставки</p>

          <div class="thanks__wrapper">
            <div class="thanks__wrapper-item">
              <p class="item-title">Номер вашего заказа:</p>
              <p class="item-info" data-type="orderNumber">{{ order.order_id }}</p>
            </div>

            <div class="thanks__wrapper-item">
              <p class="item-title">Сумма к оплате:</p>
              <p class="item-info" data-type="money">{{ order.price }}руб.</p>
            </div>
          </div>

          <p class="thanks__text thanks__text_thin">На указанную вами почту отправлено письмо с регистрационными данными</p>

          <div class="thanks__pay-body">
            <a href="#" class="thanks__pay-btn main-btn">Оплатить заказ</a>
            <p class="thanks__pay-text">Оплатите сейчас, чтобы быстрее <br> получить заказ при доставке</p>
          </div>
        </div>
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
    pageTitle: 'Заказ оформлен',
    pagePath: '/success'
  }),
  computed: {
    order () {
      return this.$store.state.localStorage.order
    }
  },
  async asyncData ({ store, $axios }) {
    const id = store.state.localStorage.order.order_id
    const params = new URLSearchParams()
    params.append('id', id)
    const res = await $axios.get('/api/orders/detail?' + params)
    console.log(res)
  }
}
</script>
