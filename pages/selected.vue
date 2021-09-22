<template>
  <div>
    <Breadcrumbs :crumbs="[{ name: pageTitle, path: pagePath }]"/>
    <section class="selected">
      <div class="container">
        <h2 class="selected__title info-title">избранное</h2>
        <div class="selected-search">
          <a href="#" class="selected-col-btn colection-btn">
            <img src="@/assets/icons/collections.svg" alt="Коллекции">
            <p>Коллекции</p>
          </a>

          <a href="#" class="selected-filter-btn filter-btn">
            <img src="@/assets/icons/filters.svg" alt="Фильтры">
            <p>Фильтры</p>
          </a>
          <a href="#" class="selected-show count-show">Показать <span id="show-count">20</span></a>
        </div>
        <div class="selected__clothes">

          <div class="cloth-item">
            <div class="cloth-item__header">
              <a href="#"><img src="@/assets/icons/like.svg" alt="Select"></a>
              <div class="cloth-item__discount">-30%</div>
            </div>

            <div class="cloth-item__body">
              <img src="@/assets/images/clothes/cloth6.png" alt="Вид одежды">
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

          <div class="cloth-item">
            <div class="cloth-item__header">
              <a href="#"><img src="@/assets/icons/like.svg" alt="Select"></a>
              <div class="cloth-item__discount">-30%</div>
            </div>

            <div class="cloth-item__body">
              <img src="@/assets/images/clothes/cloth6.png" alt="Вид одежды">
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

          <div class="cloth-item">
            <div class="cloth-item__header">
              <a href="#"><img src="@/assets/icons/like.svg" alt="Select"></a>
              <div class="cloth-item__discount">-30%</div>
            </div>

            <div class="cloth-item__body">
              <img src="@/assets/images/clothes/cloth6.png" alt="Вид одежды">
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

          <div class="cloth-item">
            <div class="cloth-item__header">
              <a href="#"><img src="@/assets/icons/like.svg" alt="Select"></a>
              <div class="cloth-item__discount">-30%</div>
            </div>

            <div class="cloth-item__body">
              <img src="@/assets/images/clothes/cloth6.png" alt="Вид одежды">
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

          <div class="cloth-item">
            <div class="cloth-item__header">
              <a href="#"><img src="@/assets/icons/like.svg" alt="Select"></a>
              <div class="cloth-item__discount">-30%</div>
            </div>

            <div class="cloth-item__body">
              <img src="@/assets/images/clothes/cloth6.png" alt="Вид одежды">
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

          <div class="cloth-item">
            <div class="cloth-item__header">
              <a href="#"><img src="@/assets/icons/like.svg" alt="Select"></a>
              <div class="cloth-item__discount">-30%</div>
            </div>

            <div class="cloth-item__body">
              <img src="@/assets/images/clothes/cloth6.png" alt="Вид одежды">
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

          <div class="cloth-item">
            <div class="cloth-item__header">
              <a href="#"><img src="@/assets/icons/like.svg" alt="Select"></a>
              <div class="cloth-item__discount">-30%</div>
            </div>

            <div class="cloth-item__body">
              <img src="@/assets/images/clothes/cloth6.png" alt="Вид одежды">
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

          <div class="cloth-item">
            <div class="cloth-item__header">
              <a href="#"><img src="@/assets/icons/like.svg" alt="Select"></a>
              <div class="cloth-item__discount">-30%</div>
            </div>

            <div class="cloth-item__body">
              <img src="@/assets/images/clothes/cloth6.png" alt="Вид одежды">
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

          <div class="cloth-item">
            <div class="cloth-item__header">
              <a href="#"><img src="@/assets/icons/like.svg" alt="Select"></a>
              <div class="cloth-item__discount">-30%</div>
            </div>

            <div class="cloth-item__body">
              <img src="@/assets/images/clothes/cloth6.png" alt="Вид одежды">
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

          <div class="cloth-item">
            <div class="cloth-item__header">
              <a href="#"><img src="@/assets/icons/like.svg" alt="Select"></a>
              <div class="cloth-item__discount">-30%</div>
            </div>

            <div class="cloth-item__body">
              <img src="@/assets/images/clothes/cloth6.png" alt="Вид одежды">
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

          <div class="cloth-item">
            <div class="cloth-item__header">
              <a href="#"><img src="@/assets/icons/like.svg" alt="Select"></a>
              <div class="cloth-item__discount">-30%</div>
            </div>

            <div class="cloth-item__body">
              <img src="@/assets/images/clothes/cloth6.png" alt="Вид одежды">
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

          <div class="cloth-item">
            <div class="cloth-item__header">
              <a href="#"><img src="@/assets/icons/like.svg" alt="Select"></a>
              <div class="cloth-item__discount">-30%</div>
            </div>

            <div class="cloth-item__body">
              <img src="@/assets/images/clothes/cloth6.png" alt="Вид одежды">
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

        <a href="#" class="catalog__show-more">Показать ещё</a>
        <button class="selected__up up-btn"></button>

        <div class="catalog__pagination pagination">
          <a data-page="1" href="#" class="active">1</a>
          <a data-page="2" href="#" >2</a>
          <a data-page="3" href="#">3</a>
          <a data-page="4" href="#">4</a>
          <a data-page="5" href="#">5</a>
          <a data-page="6" href="#">6</a>
          <a data-page="7" href="#">7</a>
          <a data-page="8" href="#">8</a>
        </div>
        <a href="#" class="next-page main-btn">Следующая</a>
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
    pageTitle: 'Избранное',
    pagePath: '/selected'
  })
}
</script>
