<template>
  <main>
    <section class="company-info">
      <div class="container">
        <h3 class="company-info__title section-title">
          условия производства
        </h3>
        <div class="company-info__wrapper">
          <div class="company-info__item">
            <img src="@/assets/icons/production/orders.svg" alt="Заказ от 5 штук">
            <h4>ЗАКАЗ ОТ 5 ШТ</h4>
            <p>Минимальный заказ для организаций - 5 изделий</p>
          </div>

          <div class="company-info__item">
            <img src="@/assets/icons/production/support.svg" alt="Поддержка">
            <h4>НА СВЯЗИ 7 ДНЕЙ В НЕДЕЛЮ</h4>
            <p>Менеджер на связи каждый день с 8:00 до 20 по МСК</p>
          </div>

          <div class="company-info__item">
            <img src="@/assets/icons/production/guarantee.svg" alt="Гарантия возврата денег">
            <h4>ГАРАНТИЯ ВОЗВРАТА ДЕНЕГ</h4>
            <p>Возвращаем 100% средств при нарушении условий договора</p>
          </div>

          <div class="company-info__item">
            <img src="@/assets/icons/production/24-hours.svg" alt="Собственное производство 24/7">
            <h4>СОБСТВЕННОЕ ПРОИЗВОДСТВО 24/7</h4>
            <p>Круглосуточно производим от 2400 изделий</p>
          </div>

          <div class="company-info__item">
            <img src="@/assets/icons/production/free-try.svg" alt="Бесплатные образцы">
            <h4>БЕСПЛАТНЫЕ ОБРАЗЦЫ</h4>
            <p>Бесплатно напечатаем образец при крупном тираже</p>
          </div>
        </div>
      </div>
    </section>

    <section class="clothes">
      <div class="container">
        <h3 class="clothes__title section-title">
          продукция
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

    <section class="company-info steps">
      <div class="container">
        <h3 class="company-info__title section-title">
          этапы работы
        </h3>
        <div class="company-info__wrapper">
          <div class="company-info__item">
            <img src="@/assets/icons/steps/1.svg" alt="1">
            <h4>ЗАКАЗ ОТ 5 ШТ</h4>
          </div>

          <div class="company-info__item">
            <img src="@/assets/icons/steps/2.svg" alt="2">
            <h4>НА СВЯЗИ 7 ДНЕЙ В НЕДЕЛЮ</h4>
          </div>

          <div class="company-info__item">
            <img src="@/assets/icons/steps/3.svg" alt="3">
            <h4>ГАРАНТИЯ ВОЗВРАТА ДЕНЕГ</h4>
          </div>

          <div class="company-info__item">
            <img src="@/assets/icons/steps/4.svg" alt="4">
            <h4>СОБСТВЕННОЕ ПРОИЗВОДСТВО 24/7</h4>
          </div>

          <div class="company-info__item">
            <img src="@/assets/icons/steps/5.svg" alt="5">
            <h4>БЕСПЛАТНЫЕ ОБРАЗЦЫ</h4>
          </div>
        </div>
      </div>
    </section>

    <section class="about wholesale__about">
      <div class="container">
        <div class="clients">
          <h2 class="clients__title section-title">НАШИ КЛИЕНТЫ</h2>
          <div class="clients__wrapper">
            <div class="clients__item"><img src="@/assets/images/clients/client1.jpg" alt="Имя Фамилия | Название компании"></div>

            <div class="clients__item"><img src="@/assets/images/clients/client1.jpg" alt="Имя Фамилия | Название компании"></div>

            <div class="clients__item"><img src="@/assets/images/clients/client1.jpg" alt="Имя Фамилия | Название компании"></div>

            <div class="clients__item"><img src="@/assets/images/clients/client1.jpg" alt="Имя Фамилия | Название компании"></div>

            <div class="clients__item"><img src="@/assets/images/clients/client1.jpg" alt="Имя Фамилия | Название компании"></div>

            <div class="clients__item"><img src="@/assets/images/clients/client1.jpg" alt="Имя Фамилия | Название компании"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="form send-form">
      <div class="container">
        <h2 class="wholesale__form-title section-title">Заполните форму</h2>
        <form action="#" method="POST" class="wholesale__form">

          <div class="form__wrapper">
            <div class="input-wrapper">
              <label for="name">Имя</label>
              <input type="text" name="name" id="name" placeholder="Введите имя">
              <span class="hidden warning">Это обязательное поля</span>
            </div>

            <div class="input-wrapper">
              <label for="number">Телефон</label>
              <input type="text" name="number" id="number" placeholder="Введите телефон">
              <span class="hidden warning">Это обязательное поля</span>
            </div>
          </div>

          <label for="number" class="text-area-label">Комментарий к заказу</label>
          <textarea name="comment" id="comment" placeholder="Ваш комментарий"></textarea>

          <button class="main-btn" type="submit">Отправить</button>
        </form>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  layout: 'default',
  head () {
    return {
      title: this.pageTitle
    }
  },
  data: () => ({
    pageTitle: 'Условия производства',
    pagePath: '/whosale'
  })
}
</script>
