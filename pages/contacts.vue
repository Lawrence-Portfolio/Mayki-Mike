<template>
  <div>
    <Breadcrumbs :crumbs="[{ name: pageTitle, path: pagePath }]"/>
    <section class="contacts">
      <div class="container">
        <div class="contacts__wrapper">
          <div class="contacts__info">
            <h2 class="contacts__title info-title">
              Контакты
            </h2>

            <a href="tel:+88003500252" class="contacts__phone">8 800 350 02 52</a>
            <a href="mailto:maykimike@yandex.ru" class="contacts__email">maykimike@yandex.ru</a>
            <address class="contacts__address">115114, Москва, Павелецкая <wbr> площадь, 1</address>

            <p class="contacts__head-text">Присоединяйтесь в социальных сетях</p>

            <div class="contacts__socials socials">
              <a href="#"><img src="@/assets/icons/socials/vk.svg" alt="ВКонтате"></a>
              <a href="#"><img src="@/assets/icons/socials/facebook.svg" alt="Facebook"></a>
              <a href="#"><img src="@/assets/icons/socials/instagram.svg" alt="Instagram"></a>
              <a href="#"><img src="@/assets/icons/socials/ok.svg" alt="Одноклассники"></a>
              <a href="#"><img src="@/assets/icons/socials/tiktok.svg" alt="TikTok"></a>
              <a href="#"><img src="@/assets/icons/socials/whatsapp.svg" alt="WhatsApp"></a>
              <a href="#"><img src="@/assets/icons/socials/tg.svg" alt="Telegram"></a>
              <a href="#"><img src="@/assets/icons/socials/viber.svg" alt="Viber"></a>
            </div>
          </div>
          <div class="map">
            <img src="@/assets/images/MAP-EXAMPLE-TODO-DELETE.jpg" alt="HERE WE NEED TO CREATE NORMAL MAP">
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
    pageTitle: 'Контакты',
    pagePath: '/contacts'
  })
}
</script>
