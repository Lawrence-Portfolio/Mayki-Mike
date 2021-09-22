<template>
  <div>
    <Breadcrumbs/>
    <section class="goods">
      <div class="container">
        <div class="goods__wrapper">
          <ProductAsideInfo :product="product" :genderProducts="genderProducts"/>
          <ProductMainInfo :product="product" :cart="cart"/>
        </div>
      </div>
      <div class="goods__mobile-fixed">
        <a class="black" href="#">Таблица размеров</a>
        <div class="content">
          <input type="text" name="count-mobile" id="count-mobile" min="1">
          <a href="#" class="buy">Беру!</a>
        </div>
      </div>
    </section>
    <section class="clothes recently">
      <div class="container">
        <h3 class="clothes__title section-title">
          Вы недавно смотрели
        </h3>
        <a href="#" class="clothes__all">Смотерть все</a>
        <div class="clothes__slider slider">
          <button class="slider__btn left-btn"></button>
          <button class="slider__btn right-btn"></button>

          <div class="clothes__slide cloth-item">
            <div class="cloth-item__header">
              <a href="#"><img src="@/assets/icons/like.svg" alt="Select"></a>
              <div class="cloth-item__discount">-30%</div>
            </div>

            <div class="cloth-item__body">
              <img src="@/assets/images/clothes/cloth1.png" alt="Вид одежды">
              <h5 class="cloth-item__body-title">Брызги красок</h5>
            </div>
            <div class="cloth-item__footer">
              <a href="#" class="cloth-item__footer-link">printbar.ru</a>
              <p class="cloth-item__footer-type">Мужская футболка</p>
              <div class="cloth-item__price">
                <span class="old-price">1 799</span>
                <span class="new-price">1 199 руб.</span>
              </div>
              <a href="#" class="main-btn cloth-item__btn">Беру</a>
            </div>
          </div>

          <div class="clothes__slide slide cloth-item">
            <div class="cloth-item__header">
              <a href="#"><img src="@/assets/icons/like.svg" alt="Select"></a>
              <div class="cloth-item__discount">-30%</div>
            </div>

            <div class="cloth-item__body">
              <img src="@/assets/images/clothes/cloth2.png" alt="Вид одежды">
              <h5 class="cloth-item__body-title">NUN</h5>
            </div>
            <div class="cloth-item__footer">
              <a href="#" class="cloth-item__footer-link">printbar.ru</a>
              <p class="cloth-item__footer-type">Мужскае худи</p>
              <div class="cloth-item__price">
                <span class="old-price">5 799</span>
                <span class="new-price">3 199 руб.</span>
              </div>
              <a href="#" class="main-btn cloth-item__btn">Беру</a>
            </div>
          </div>

          <div class="clothes__slide cloth-item">
            <div class="cloth-item__header">
              <a href="#"><img src="@/assets/icons/like.svg" alt="Select"></a>
              <div class="cloth-item__discount">-30%</div>
            </div>

            <div class="cloth-item__body">
              <img src="@/assets/images/clothes/cloth3.png" alt="Вид одежды">
              <h5 class="cloth-item__body-title">Brawl Stars Crow</h5>
            </div>
            <div class="cloth-item__footer">
              <a href="#" class="cloth-item__footer-link">printbar.ru</a>
              <p class="cloth-item__footer-type">Мужская футболка</p>
              <div class="cloth-item__price">
                <span class="old-price">1 799</span>
                <span class="new-price">1 199 руб.</span>
              </div>
              <a href="#" class="main-btn cloth-item__btn">Беру</a>
            </div>
          </div>

          <div class="clothes__slide cloth-item">
            <div class="cloth-item__header">
              <a href="#"><img src="@/assets/icons/like.svg" alt="Select"></a>
              <div class="cloth-item__discount">-30%</div>
            </div>

            <div class="cloth-item__body">
              <img src="@/assets/images/clothes/cloth4.png" alt="Вид одежды">
              <h5 class="cloth-item__body-title">Брызги красок</h5>
            </div>
            <div class="cloth-item__footer">
              <a href="#" class="cloth-item__footer-link">printbar.ru</a>
              <p class="cloth-item__footer-type">Женская футболка</p>
              <div class="cloth-item__price">
                <span class="old-price">1 799</span>
                <span class="new-price">1 199 руб.</span>
              </div>
              <a href="#" class="main-btn cloth-item__btn">Беру</a>
            </div>
          </div>

          <div class="clothes__slide cloth-item">
            <div class="cloth-item__header">
              <a href="#"><img src="@/assets/icons/like.svg" alt="Select"></a>
              <div class="cloth-item__discount">-30%</div>
            </div>

            <div class="cloth-item__body">
              <img src="@/assets/images/clothes/cloth5.png" alt="Вид одежды">
              <h5 class="cloth-item__body-title">Брызги красок</h5>
            </div>
            <div class="cloth-item__footer">
              <a href="#" class="cloth-item__footer-link">printbar.ru</a>
              <p class="cloth-item__footer-type">Мужская футболка</p>
              <div class="cloth-item__price">
                <span class="old-price">1 799</span>
                <span class="new-price">1 199 руб.</span>
              </div>
              <a href="#" class="main-btn cloth-item__btn">Беру</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="clothes same">
      <div class="container">
        <h3 class="clothes__title section-title">
          Похожие
        </h3>
        <a href="#" class="clothes__all">Смотерть все</a>
        <div class="clothes__slider slider">
          <button class="slider__btn left-btn"></button>
          <button class="slider__btn right-btn"></button>

          <div class="clothes__slide cloth-item">
            <div class="cloth-item__header">
              <a href="#"><img src="@/assets/icons/like.svg" alt="Select"></a>
              <div class="cloth-item__discount">-30%</div>
            </div>
            <div class="cloth-item__body">
              <img src="@/assets/images/clothes/cloth1.png" alt="Вид одежды">
              <h5 class="cloth-item__body-title">Брызги красок</h5>
            </div>
            <div class="cloth-item__footer">
              <a href="#" class="cloth-item__footer-link">printbar.ru</a>
              <p class="cloth-item__footer-type">Мужская футболка</p>
              <div class="cloth-item__price">
                <span class="old-price">1 799</span>
                <span class="new-price">1 199 руб.</span>
              </div>
              <a href="#" class="main-btn cloth-item__btn">Беру</a>
            </div>
          </div>
          <div class="clothes__slide slide cloth-item">
            <div class="cloth-item__header">
              <a href="#"><img src="@/assets/icons/like.svg" alt="Select"></a>
              <div class="cloth-item__discount">-30%</div>
            </div>
            <div class="cloth-item__body">
              <img src="@/assets/images/clothes/cloth2.png" alt="Вид одежды">
              <h5 class="cloth-item__body-title">NUN</h5>
            </div>
            <div class="cloth-item__footer">
              <a href="#" class="cloth-item__footer-link">printbar.ru</a>
              <p class="cloth-item__footer-type">Мужскае худи</p>
              <div class="cloth-item__price">
                <span class="old-price">5 799</span>
                <span class="new-price">3 199 руб.</span>
              </div>
              <a href="#" class="main-btn cloth-item__btn">Беру</a>
            </div>
          </div>
          <div class="clothes__slide cloth-item">
            <div class="cloth-item__header">
              <a href="#"><img src="@/assets/icons/like.svg" alt="Select"></a>
              <div class="cloth-item__discount">-30%</div>
            </div>
            <div class="cloth-item__body">
              <img src="@/assets/images/clothes/cloth3.png" alt="Вид одежды">
              <h5 class="cloth-item__body-title">Brawl Stars Crow</h5>
            </div>
            <div class="cloth-item__footer">
              <a href="#" class="cloth-item__footer-link">printbar.ru</a>
              <p class="cloth-item__footer-type">Мужская футболка</p>
              <div class="cloth-item__price">
                <span class="old-price">1 799</span>
                <span class="new-price">1 199 руб.</span>
              </div>
              <a href="#" class="main-btn cloth-item__btn">Беру</a>
            </div>
          </div>
          <div class="clothes__slide cloth-item">
            <div class="cloth-item__header">
              <a href="#"><img src="@/assets/icons/like.svg" alt="Select"></a>
              <div class="cloth-item__discount">-30%</div>
            </div>
            <div class="cloth-item__body">
              <img src="@/assets/images/clothes/cloth4.png" alt="Вид одежды">
              <h5 class="cloth-item__body-title">Брызги красок</h5>
            </div>
            <div class="cloth-item__footer">
              <a href="#" class="cloth-item__footer-link">printbar.ru</a>
              <p class="cloth-item__footer-type">Женская футболка</p>
              <div class="cloth-item__price">
                <span class="old-price">1 799</span>
                <span class="new-price">1 199 руб.</span>
              </div>
              <a href="#" class="main-btn cloth-item__btn">Беру</a>
            </div>
          </div>
          <div class="clothes__slide cloth-item">
            <div class="cloth-item__header">
              <a href="#"><img src="@/assets/icons/like.svg" alt="Select"></a>
              <div class="cloth-item__discount">-30%</div>
            </div>
            <div class="cloth-item__body">
              <img src="@/assets/images/clothes/cloth5.png" alt="Вид одежды">
              <h5 class="cloth-item__body-title">Брызги красок</h5>
            </div>
            <div class="cloth-item__footer">
              <a href="#" class="cloth-item__footer-link">printbar.ru</a>
              <p class="cloth-item__footer-type">Мужская футболка</p>
              <div class="cloth-item__price">
                <span class="old-price">1 799</span>
                <span class="new-price">1 199 руб.</span>
              </div>
              <a href="#" class="main-btn cloth-item__btn">Беру</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Breadcrumbs from '@/components/element/Breadcrumbs'
import ProductAsideInfo from '@/components/product/ProductAsideInfo'
import ProductMainInfo from '@/components/product/ProductMainInfo'
export default {
  components: {
    Breadcrumbs,
    ProductAsideInfo,
    ProductMainInfo
  },
  computed: {
    product () {
      return this.$store.getters['product-detail/product']
    },
    cart () {
      return this.$store.getters['localStorage/cart']
    },
    genderProducts () {
      return this.$store.getters['product-detail/genderProducts']
    }
  },
  async asyncData ({ params, store }) {
    console.log(params)
    await store.dispatch('product-detail/getProductDetail', params.card)
  }
}
</script>
