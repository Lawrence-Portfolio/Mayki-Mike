<template>
  <header class="header">
    <div class="header__top">
      <div class="container">
        <div class="header__wrapper">
          <div class="header__activity">
            <Logo/>
            <button class="header__activity-btn cities-btn">Россия, москва</button>
          </div>
          <HeaderTopLinks/>
          <div class="header__activity ml-auto">
            <a class="header__phone phone" href="tel:+88003500252">8 800 350 02 52</a>
            <button class="header__activity-btn socilas-btn">Соц. сети</button>
            <div class="header__socials socials hidden">
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

          <a href="#" class="header__enter-btn main-btn">
            вход
          </a>
        </div>
      </div>
    </div>
    <div class="header__bottom">
      <div class="container">
        <div class="header__wrapper">
          <div class="header__catalog-wr">
            <RouterLink to="/catalog" class="header__catalog-btn main-btn">
              <span></span>
              <p>каталог</p>
            </RouterLink>
            <CatalogNav/>
          </div>
          <CategoriesNav/>
          <form class="header__search-form" method="GET">
            <input type="text" name="goods-search" id="goods-search" placeholder="Поиск товара">
            <a href="#" class="header__search-form-btn">
              <img src="@/assets/icons/search.svg" alt="Поиск товара">
            </a>
          </form>

          <NuxtLink to="/selected" class="header__user-info">
            <div class="header__user-info-wrapper">
              <img src="@/assets/icons/likeThin.svg" alt="Selected">
              <p>избранное (<span id="liked-count">156</span>)</p>
            </div>
          </NuxtLink>

          <NuxtLink to="/cart" class="header__user-info">
            <div class="header__user-info-wrapper">
              <img src="@/assets/icons/cart.svg" alt="Cart">
              <p>корзина (<span id="cart-count">{{ cartCount }}</span>)</p>
            </div>
          </NuxtLink>

          <a href="#" class="header__burger">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      </div>
    </div>
    <!-- ADD active TO WATCH -->
    <MoblieMenu/>
  </header>
</template>

<script>
import Logo from '@/components/header/Logo'
import HeaderTopLinks from '@/components/header/HeaderTopLinks'
import CategoriesNav from '@/components/header/CategoiresNav'
import CatalogNav from '@/components/header/CatalogNav'
import MoblieMenu from '@/components/header/MobileMenu'
export default {
  components: {
    Logo,
    HeaderTopLinks,
    CategoriesNav,
    CatalogNav,
    MoblieMenu
  },
  computed: {
    cartCount () {
      return this.$store.state.localStorage.cart.length
    }
  }
}
</script>
