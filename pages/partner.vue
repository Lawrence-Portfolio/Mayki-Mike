<template>
  <main>
    <section class="about partner__about">
      <div class="container">
        <h2 class="about__title section-title">
          открой свой бизнес
        </h2>
        <div class="about__info">
          <div class="about__text">
            <p>Print Bar– это уникальный проект, позволяющий каждому человеку почувствовать себя дизайнером одежды и аксессуаров.</p>
            <p>У нас вы можете создавать свои собственные коллекции одежды как для личных нужд, так и для последующей продажи.</p>
            <p>Вы можете радовать себя и своих близких вещами с эксклюзивными принтами, а также можете создать успешный бизнес без стартовых затрат.</p>
            <p>Вы можете заказать от одной до тысячи футболок и наши партнеры с радостью произведут их всего за 48 часов.</p>
          </div>
          <div class="about__video"></div>
        </div>
      </div>
    </section>

    <section class="gender partner__gender">
      <div class="container">
        <div class="gender__wrapper">
          <div class="gender__female">
            <h3 class="gender__title">СОЗДАВАЙ СВОИ ТОВАРЫ</h3>
            <a href="#" class="main-btn gender__btn">Начать продавать</a>
          </div>
          <div class="gender__male">
            <h3 class="gender__title">открой свой магазин</h3>
            <a href="#" class="main-btn gender__btn">Начать продавать</a>
          </div>
        </div>
      </div>
    </section>

    <section class="company-info steps steps_4">
      <div class="container">
        <h3 class="company-info__title section-title">
          Как мы работаем
        </h3>
        <div class="company-info__wrapper">
          <div class="company-info__item">
            <img src="@/assets/icons/steps/1.svg" alt="1">
            <h4>КЛИЕНТ ОТПРАВЛЯЕТ ЗАЯВКУ</h4>
          </div>

          <div class="company-info__item">
            <img src="@/assets/icons/production/support.svg" alt="2">
            <h4>МЫ СВЯЗЫВАЕМСЯ С НИМ В ТЕЧЕНИЕ ЧАСА</h4>
          </div>

          <div class="company-info__item">
            <img src="@/assets/icons/steps/5.svg" alt="3">
            <h4>ДОСТАВЛЯЕМ ЗАКАЗ</h4>
          </div>

          <div class="company-info__item">
            <img src="@/assets/icons/steps/6.svg" alt="4">
            <h4>ВЫ ПОЛУЧАЕТЕ ПРИБЫЛЬ</h4>
          </div>
        </div>
      </div>
    </section>

    <section class="advantages">
      <div class="container">
        <h3 class="advantages__title section-title">
          преимущества
        </h3>
        <div class="advantages__wrapper">
          <div class="advantages__item">
            <h3>НИКАКИХ РИСКОВ</h3>
            <ul class="advantages__list assurance__list">
              <li class="assurance__list-item">
                Обработку заказов, пошив и доставку - берем на себя
              </li>
              <li class="assurance__list-item">
                Подробная и точная статистика продаж
              </li>
              <li class="assurance__list-item">
                Своевременные выплаты удобным способом
              </li>
            </ul>
          </div>

          <div class="advantages__item">
            <h3>БЫСТРЫЙ ЗАПУСК ВАШЕГО БИЗНЕСА</h3>
            <ul class="advantages__list assurance__list">
              <li class="assurance__list-item">
                Интернет-магазин с индивидуальным дизайном всего за 1 день
              </li>
              <li class="assurance__list-item">
                Окупаемость затрат и получение первой прибыли в течение 10 дней
              </li>
            </ul>
          </div>

          <div class="advantages__item">
            <h3>ВЫСОКАЯ КОНВЕРСИЯ</h3>
            <ul class="advantages__list assurance__list">
              <li class="assurance__list-item">
                Более 100 000 принтов для любой аудитории
              </li>
              <li class="assurance__list-item">
                Создание партнерских коллекций под актуальные события
              </li>
            </ul>
          </div>

          <div class="advantages__item">
            <h3>УНИКАЛЬНЫЙ ПРОДУКТ</h3>
            <ul class="advantages__list assurance__list">
              <li class="assurance__list-item">
                PRINT BAR – это современные технологии и экологичные материалы
              </li>
              <li class="assurance__list-item">
                WOW-эффект - одежда с печатью по всей поверхности изделия
              </li>
            </ul>
          </div>

          <div class="advantages__item">
            <h3>ИНДИВИДУАЛЬНЫЙ СЕРВИС</h3>
            <ul class="advantages__list assurance__list">
              <li class="assurance__list-item">
                Персональное оформление твоего интернет-магазина
              </li>
              <li class="assurance__list-item">
                Помощь при создании авторских коллекций
              </li>
            </ul>
          </div>

          <div class="advantages__item">
            <h3>ЛИЧНЫЙ МЕНЕДЖЕР</h3>
            <ul class="advantages__list assurance__list">
              <li class="assurance__list-item">
                Оперативные ответы на все ваши вопросы
              </li>
              <li class="assurance__list-item">
                Подскажем, какую рекламу использовать, и как это делать на максимум
              </li>
              <li class="assurance__list-item">
                Рядом c вами на каждом этапе
              </li>
            </ul>
          </div>
        </div>

        <div class="advantages__pagination hidden">
          <a class="active" href="#" data-show="1-2"></a>
          <a href="#" data-show="3-4"></a>
          <a href="#" data-show="5-6"></a>
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
    pageTitle: 'Открой свой бизнес',
    pagePath: '/partner'
  })
}
</script>
