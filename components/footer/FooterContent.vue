<template>
  <div class="footer__content">

    <ul class="footer__nav">
      <li>
        <NuxtLink to="/about">
          О компании
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contacts">
          Контакты
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/feedback">
          Отзывы
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/production">
          Наше производство
        </NuxtLink>
      </li>
    </ul>

    <ul class="footer__nav">
      <li><a href="#">Как сделать заказ?</a></li>
      <li><a href="#">Доставка</a></li>
      <li>
        <NuxtLink to="/assurance">
          Обмен и возврат
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/location">
          Где мой заказ?
        </NuxtLink>
      </li>
      <li><a href="#">Оплата</a></li>
    </ul>

    <ul class="footer__nav">
      <li><a href="#">Опт</a></li>
      <li>
        <NuxtLink to="/partner">
          Партнерская программа
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/detalis">
          Реквизиты
        </NuxtLink>
      </li>
      <li><a href="#">Политика конфиденциальности</a></li>
      <li><a href="#">Пользовательское соглашение</a></li>
      <li><a href="#">Лицензионный договор</a></li>
    </ul>

    <div class="footer__info">
      <div class="footer__socials socials">
        <a href="#"><img src="@/assets/icons/socials/vk.svg" alt="ВКонтате"></a>
        <a href="#"><img src="@/assets/icons/socials/facebook.svg" alt="Facebook"></a>
        <a href="#"><img src="@/assets/icons/socials/instagram.svg" alt="Instagram"></a>
        <a href="#"><img src="@/assets/icons/socials/ok.svg" alt="Одноклассники"></a>
        <a href="#"><img src="@/assets/icons/socials/tiktok.svg" alt="TikTok"></a>
        <a href="#"><img src="@/assets/icons/socials/whatsapp.svg" alt="WhatsApp"></a>
        <a href="#"><img src="@/assets/icons/socials/tg.svg" alt="Telegram"></a>
        <a href="#"><img src="@/assets/icons/socials/viber.svg" alt="Viber"></a>
      </div>

      <a class="footer__phone" href="tel:+88003500252">8 800 350 02 52</a>
      <a class="footer__mail" href="mailto:maykimike@yandex.ru">maykimike@yandex.ru</a>
      <address>115114, Москва, Павелецкая площадь, 1</address>
      <a class="footer__map-link" href="#">показать на карте</a>
    </div>
  </div>
</template>
