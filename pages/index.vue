<template>
  <div>
    <section class="clothes">
      <div class="container">
        <h3 class="clothes__title section-title">
          новые поступления
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
    <section class="gender">
      <div class="container">
        <div class="gender__wrapper">
          <div class="gender__female">
            <h3 class="gender__title">Женщинам</h3>
            <a href="#" class="main-btn gender__btn">Каталог</a>
          </div>
          <div class="gender__male">
            <h3 class="gender__title">Мужчинам</h3>
            <a href="#" class="main-btn gender__btn">Каталог</a>
          </div>
        </div>
      </div>
    </section>

    <section class="clothes">
      <div class="container">
        <h3 class="clothes__title section-title">
          самые популярные
        </h3>
        <a href="#" class="clothes__all">Смотерть все</a>
        <div class="clothes__slider slider hidden">
          <button class="slider__btn left-btn"></button>
          <button class="slider__btn right-btn"></button>

          <div class="clothes__slide cloth-item">
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

          <div class="clothes__slide slide cloth-item">
            <div class="cloth-item__header">
              <a href="#"><img src="@/assets/icons/like.svg" alt="Select"></a>
              <div class="cloth-item__discount">-30%</div>
            </div>

            <div class="cloth-item__body">
              <img src="@/assets/images/clothes/cloth7.png" alt="Вид одежды">
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
              <img src="@/assets/images/clothes/cloth8.png" alt="Вид одежды">
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
              <img src="@/assets/images/clothes/cloth9.png" alt="Вид одежды">
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
              <img src="@/assets/images/clothes/cloth10.png" alt="Вид одежды">
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

    <div class="popular">
      <div class="container">
        <div class="popular__wrapper">
          <a href="#" class="popular__item"><img src="@/assets/images/popular/9may.jpg" alt="Популярная категория: 9 Мая"></a>
          <a href="#" class="popular__item"><img src="@/assets/images/popular/hipsters.jpg" alt="Популярная категория: Хипстеры"></a>
        </div>
      </div>
    </div>

    <section class="gift">
      <div class="container">
        <div class="gift__wrapper">
          <div class="gift__body">
            <h3 class="gift__title">
              Подписывайтесь на нашу рассылку <wbr>
              и получайте скидки и подарки
            </h3>

            <form class="gift__form" method="POST">
              <input type="email" name="email" id="gift-email" placeholder="Введите E-mail">
              <span class="hidden warning">Это обязательное поля</span>
              <a href="#" class="main-btn gift__btn">Подписаться</a>
            </form>
          </div>

          <div class="gift__img">
            <img src="@/assets/images/gift.png" alt="Подарки и скидки">
          </div>
        </div>
      </div>
    </section>

    <section class="instagram">
      <div class="container">
        <h3 class="instagram__title section-title">
          MAYKI MIKE в instagram
        </h3>
        <div class="instagram__wrapper">
          <div>
            <img class="instagram__img" src="@/assets/images/instagram/inst1.jpg" alt="Photo name">
          </div>

          <div>
            <img class="instagram__img" src="@/assets/images/instagram/inst2.jpg" alt="Photo name">
          </div>

          <div>
            <img class="instagram__img" src="@/assets/images/instagram/inst3.jpg" alt="Photo name">
          </div>

          <div>
            <img class="instagram__img" src="@/assets/images/instagram/inst4.jpg" alt="Photo name">
          </div>

          <div>
            <img class="instagram__img" src="@/assets/images/instagram/inst5.jpg" alt="Photo name">
          </div>

          <div>
            <img class="instagram__img" src="@/assets/images/instagram/inst6.jpg" alt="Photo name">
          </div>
        </div>
        <div class="instagram__btns-container">
          <a href="#" class="main-btn main-btn_black instagram__btn">Загрузить больше...</a>
          <a href="#" class="main-btn instagram__btn">Перейти в Instagram</a>
        </div>
      </div>
    </section>

    <section class="categories">
      <div class="container">
        <h3 class="categories__title section-title">
          Все категории
        </h3>
        <div class="categories__wrapper">
          <a href="#" class="categories__item">
            <img src="@/assets/images/categories/cars.jpg" alt="Авто и Мото">
            <h4>Авто и Мото</h4>
          </a>
          <a href="#" class="categories__item">
            <img src="@/assets/images/categories/animals.jpg" alt="Животные">
            <h4>Животные</h4>
          </a>
          <a href="#" class="categories__item">
            <img src="@/assets/images/categories/games.jpg" alt="Игры">
            <h4>ИГры</h4>
          </a>
          <a href="#" class="categories__item">
            <img src="@/assets/images/categories/cartoons.jpg" alt="Мультфильмы">
            <h4>Мультфильмы</h4>
          </a>
          <a href="#" class="categories__item">
            <img src="@/assets/images/categories/russia.jpg" alt="Россия">
            <h4>Россия</h4>
          </a>
          <a href="#" class="categories__item">
            <img src="@/assets/images/categories/authorsDesig.jpg" alt="Авторские дизайны">
            <h4>авторские <br> дизайны</h4>
          </a>
          <a class="categories__item">
            <img src="@/assets/images/categories/music.jpg" alt="Музыка">
            <h4>Музыка</h4>
          </a>
          <a href="#" class="categories__item">
            <img src="@/assets/images/categories/hokey.jpg" alt="Хоккей">
            <h4>хоккей</h4>
          </a>
          <a href="#" class="categories__item">
            <img src="@/assets/images/categories/pictures.jpg" alt="Рисунки и Картины">
            <h4>Рисунки <br> и картинки</h4>
          </a>
          <a class="categories__item">
            <img src="@/assets/images/categories/9may.jpg" alt="9 Мая">
            <h4>9 МАЯ</h4>
          </a>
          <a href="#" class="categories__item">
            <img src="@/assets/images/categories/hipsters.jpg" alt="Хипстеры">
            <h4>Хипстеры</h4>
          </a>
          <a href="#" class="categories__item">
            <img src="@/assets/images/categories/blogers.jpg" alt="Блогеры">
            <h4>блогеры</h4>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'default',
  head () {
    return {
      title: 'Интернет-магазин одежды с принтами - Майки Майк'
    }
  }
}
</script>
