<template>
  <div>
    <Breadcrumbs :crumbs="[{ name: pageTitle, path: pagePath }]"/>
    <section class="order">
      <div class="container">
        <h2 class="order__title">
          Оформление заказа
        </h2>
        <p class="order__subtitle">*Срок доставки от 2-х дней после изготовления заказа</p>
        <div class="order__wrapper">
          <div class="order__inputs">
            <div class="flex-wrapper">
              <div class="input-wrapper">
                <label for="email">E-mail</label>
                <input
                  v-model="form.email"
                  class="input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Введите e-mail">
                <span v-if="$v.form.email.$dirty && !$v.form.email.required" class="warning">Обязательное поле</span>
                <span v-if="$v.form.email.$dirty && !$v.form.email.email" class="warning">Email введен неверно</span>
              </div>

              <div class="input-wrapper">
                <label for="tel">Телефон</label>
                <input
                  v-model="form.phone"
                  v-mask="'+7 (###) ###-##-##'"
                  class="input"
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Введите телефон">
                <span v-if="$v.form.phone.$dirty && !$v.form.phone.required" class="warning">Обязательное поле</span>
              </div>
            </div>

            <div class="flex-wrapper">
              <div class="input-wrapper">
                <label for="name">Имя</label>
                <input
                  v-model="form.firstName"
                  class="input"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Введите имя">
                <span v-if="$v.form.firstName.$dirty && !$v.form.firstName.required" class="warning">Обязательное поле</span>
              </div>

              <div class="input-wrapper">
                <label for="surname">Фамилия</label>
                <input
                  v-model="form.lastName"
                  class="input"
                  type="text"
                  name="surname"
                  id="surname"
                  placeholder="Введите фамилию">
                <span v-if="$v.form.lastName.$dirty && !$v.form.lastName.required" class="warning">Обязательное поле</span>
              </div>
            </div>

            <div class="flex-wrapper">
              <div class="input-wrapper">
                <label for="country">Страна</label>
                <input
                  v-model="form.country"
                  class="input"
                  type="text"
                  name="country"
                  id="country"
                  placeholder="Введите страну">
                <span v-if="$v.form.country.$dirty && !$v.form.country.required" class="warning">Обязательное поле</span>
              </div>

              <div class="input-wrapper">
                <label for="city">Город</label>
                <input
                  v-model="form.town"
                  class="input"
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Введите город">
                <span v-if="$v.form.town.$dirty && !$v.form.town.required" class="warning">Обязательное поле</span>
              </div>
            </div>

            <div class="input-wrapper input-wrapper_big">
              <label for="address">Адрес</label>
              <input
                v-model="form.address"
                class="input"
                type="text"
                name="address"
                id="address"
                placeholder="Введите адрес">
              <span v-if="$v.form.address.$dirty && !$v.form.address.required" class="warning">Обязательное поле</span>
            </div>

            <div class="order__delivery">
              <h3 class="order__title">
                Доставка
              </h3>
              <div class="order__payment-btns">
                <div class="radio-btn">
                  <input v-model="form.delivery" id="сourier-delivery" type="radio" name="delivery" value="сourier">
                  <label for="сourier-delivery">Курьером</label>
                </div>
                <div class="radio-btn">
                  <input v-model="form.delivery" id="pickup-delivery" type="radio" name="delivery" value="pickup" >
                  <label for="pickup-delivery">Самовывоз</label>
                </div>
              </div>
              <p class="order__section-subtitle">КСЭ - МСК</p>
              <a href="#" class="order__delivery-btn main-btn">Изменить доставку</a>

              <label for="comments">Коментарий к заказу</label>
              <textarea name="comments" id="comments" placeholder="Ваш комментарий"></textarea>

              <a href="#" class="order__structure-btn main-btn">Состав заказа</a>

              <p class="order__delivery-bold-text">
                Способы доставки в <span data-type="citt">г. Москва</span>
              </p>

              <table class="order__delivery-table">
                <tr>
                  <td class="header">Пункты выдачи СДЭК</td>
                  <td class="days">от 3 дней</td>
                  <td class="price">130 руб.</td>
                </tr>

                <tr>
                  <td class="header">Пункты выдачи Boxberry</td>
                  <td class="days">от 2 дней</td>
                  <td class="price">195 руб.</td>
                </tr>

                <tr>
                  <td class="header">Пункты выдачи DPD</td>
                  <td class="days">от 2 дней</td>
                  <td class="price">215 руб.</td>
                </tr>

                <tr>
                  <td class="header">Пункты выдачи Pick Point</td>
                  <td class="days">от 1 дней</td>
                  <td class="price">220 руб.</td>
                </tr>
              </table>

              <table class="order__delivery-table mt24">
                <tr>
                  <td class="header">Доставка курьером СДЭК</td>
                  <td class="days">от 2 дней</td>
                  <td class="price">235 руб.</td>
                </tr>

                <tr>
                  <td class="header">Доставка курьером DPD</td>
                  <td class="days">от 2 дней</td>
                  <td class="price">300 руб.</td>
                </tr>
              </table>

              <table class="order__delivery-table mt24">
                <tr>
                  <td class="header">Почта России (посылка)</td>
                  <td class="days">от 3 дней</td>
                  <td class="price">295 руб.</td>
                </tr>
              </table>

              <p class="order__delivery-small-text">
                Сроки доставки актуальны для текущего заказа. Изменение заказа приведет к изменению сроков доставки
              </p>
            </div>

            <div class="order__payment">
              <h3 class="order__title">
                Оплата
              </h3>
              <p class="order__section-subtitle">Способ оплаты</p>
              <div class="order__payment-btns">
                <div class="radio-btn">
                  <input v-model="form.payment" id="payment-online" type="radio" name="payment" value="online">
                  <label for="payment-online">Онлайн</label>
                </div>

                <div class="radio-btn">
                  <input v-model="form.payment" id="payment-cash" type="radio" name="payment" value="cash" >
                  <label for="payment-cash">При получение</label>
                </div>
              </div>

              <div class="order__payment-systems">
                <img src="@/assets/icons/payment/visa.svg" alt="visa" class="first">
                <img src="@/assets/icons/payment/mastercard.svg" alt="mastercard" class="second">
                <img src="@/assets/icons/payment/3.svg" alt="-----" class="third">
                <img src="@/assets/icons/payment/io.svg" alt="io" class="fourth">
                <img src="@/assets/icons/payment/mir.svg" alt="мир" class="fifth">
              </div>
              <p class="order__payment-info">Дополнтильная скидка 5% при оплате онлайн</p>
            </div>
          </div>
          <div class="order__sum-info">
            <div class="order__clothes">
              <div v-for="item in cart" :key="item.id" class="order__clothes-item">
                <img :src="item.image" alt="Фото заказа">
                <div class="order__clothes-item-info">
                  <h3 class="title">{{ item.name }}</h3>
                  <div class="code">Артикул <span data-type="code">{{ item.artnumber }}</span></div>
                  <a href="#" class="link">printbar.ru</a>

                  <div class="settings">
                    <p>Размер {{ item.size.latin }}</p>
                    <p>{{ item.card.title }}</p>
                    <p>{{ item.print.title }}</p>
                  </div>
                </div>
                <div class="price">
                  <div class="old-price">{{ item.price }} </div>
                  <div class="new-price">{{ item.d_price }} ₽</div>
                </div>
              </div>
            </div>

            <div class="input-wrapper">
              <label for="promo">У Вас есть промокод?</label>
              <input class="input" type="text" name="promo" id="promo" placeholder="Введите промокод">
            </div>

            <div class="order__total">
              <div class="order__total-item">
                <p class="title">Общая сумма</p>
                <p class="price">{{ cartPrice.total }}₽</p>
              </div>

              <div class="order__total-item">
                <p class="title">Скидка</p>
                <p class="discount">{{ cartPrice.discount }}₽</p>
              </div>

              <div class="order__total-item">
                <p class="title title_big">Итого</p>
                <p class="total-sum">{{ cartPrice.d_total }}₽</p>
              </div>
            </div>

            <div class="order__checkbox-wrapper">
              <input v-model="form.dataProcessing" type="checkbox" name="agree" id="agree">
              <label for="agree">
                Соглашаюсь с условиями
                <a href="#" target="_blank">Обработки персональных данных</a>
              </label>
              <span v-if="$v.form.dataProcessing.$dirty && !$v.form.dataProcessing.sameAs" class="warning">Обязательное поле</span>
            </div>

            <div class="order__checkbox-wrapper">
              <input v-model="form.getInformation" type="checkbox" name="sign" id="sign">
              <label for="sign">
                Хочу получать информацию о скидках, акциях и новостях компании
              </label>
            </div>

            <button @click="createOrder" class="order__accept-btn main-btn">Подтвердить заказ</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { required, email, sameAs } from 'vuelidate/lib/validators'
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
    pageTitle: 'Оформление заказа',
    pagePath: '/checkout',
    form: {
      email: '',
      phone: '',
      firstName: '',
      lastName: '',
      country: '',
      town: '',
      address: '',
      payment: 'online',
      delivery: 'сourier',
      dataProcessing: false,
      getInformation: false
    }
  }),
  validations: {
    form: {
      email: {
        required, email
      },
      phone: {
        required
      },
      firstName: {
        required
      },
      lastName: {
        required
      },
      country: {
        required
      },
      town: {
        required
      },
      address: {
        required
      },
      dataProcessing: {
        sameAs: sameAs(() => true)
      }
    }
  },
  computed: {
    cart () {
      return this.$store.getters['localStorage/cart']
    },
    cartPrice () {
      return this.$store.getters['localStorage/cartPrice']
    }
  },
  methods: {
    createOrder () {
      console.log(this.form)
      this.$v.form.$touch()
      if (this.$v.form.$invalid) {
        return false
      }
      this.$store.dispatch('order/createOrder', this.form)
    }
  }
}
</script>
