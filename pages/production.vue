<template>
  <main>
    <section class="about">
      <div class="container">
        <h2 class="about__title section-title">
          наше производство
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
    <section class="production">
      <div class="container">
        <ol class="production__wrapper">
          <li class="production__item">
            <div class="production__item-img">
              <img src="@/assets/images/production/step1.jpg" alt="Шаг первый">
            </div>
            <div class="production__item-body">
              <h3 class="production__item-title">
                Подготовка макета
              </h3>
              <p class="production__item-text">
                Наш дизайнер вручную раскладывает каждое изображение для совпадения рисунка на элементы изделия.
              </p>
            </div>
          </li>

          <li class="production__item">
            <div class="production__item-img">
              <img src="@/assets/images/production/step2.jpg" alt="Шаг второй">
            </div>
            <div class="production__item-body">
              <h3 class="production__item-title">
                HD печать изображения
              </h3>
              <p class="production__item-text">
                Для получения эффекта максимальной цветопередачи изображение печатается на бумагу на специальном сублимационном плоттере.
              </p>
            </div>
          </li>

          <li class="production__item">
            <div class="production__item-img">
              <img src="@/assets/images/production/step3.jpg" alt="Шаг третий">
            </div>
            <div class="production__item-body">
              <h3 class="production__item-title">
                Перенос изображения на ткань
              </h3>
              <p class="production__item-text">
                Под воздействием температуры изображение переносится на ткань. При этой технологии краска проникает в волокна ткани и достигается эффект максимальной яркости.
              </p>
            </div>
          </li>

          <li class="production__item">
            <div class="production__item-img">
              <img src="@/assets/images/production/step4.jpg" alt="Шаг четвертый">
            </div>
            <div class="production__item-body">
              <h3 class="production__item-title">
                Ручной закрой
              </h3>
              <p class="production__item-text">
                Каждое изделие раскраивается вручную нашими специалистами.
              </p>
            </div>
          </li>

          <li class="production__item">
            <div class="production__item-img">
              <img src="@/assets/images/production/step5.jpg" alt="Шаг пятый">
            </div>
            <div class="production__item-body">
              <h3 class="production__item-title">
                Пошив
              </h3>
              <p class="production__item-text">
                Мы используем самое современное японское оборудование, благодаря чему достигается эффект “итальянского качества”.
              </p>
            </div>
          </li>

          <li class="production__item">
            <div class="production__item-img">
              <img src="@/assets/images/production/step6.jpg" alt="Шаг шестой">
            </div>
            <div class="production__item-body">
              <h3 class="production__item-title">
                Идеальные швы
              </h3>
              <p class="production__item-text">
                Швы на наших изделиях получаются идеально ровными и качественными
              </p>
            </div>
          </li>

          <li class="production__item">
            <div class="production__item-img">
              <img src="@/assets/images/production/step7.jpg" alt="Шаг седьмой">
            </div>
            <div class="production__item-body">
              <h3 class="production__item-title">
                Готовое изделие
              </h3>
              <p class="production__item-text">
                Мы осуществляем контроль качества каждого изделия, чтобы все наши клиенты остались довольны.
              </p>
            </div>
          </li>

          <li class="production__item">
            <div class="production__item-img">
              <img src="@/assets/images/production/step8.jpg" alt="Шаг восьмой">
            </div>
            <div class="production__item-body">
              <h3 class="production__item-title">
                Упаковка и отправка изделия вам
              </h3>
              <p class="production__item-text">
                Мы доставим ваше изделие в любую точку Мира в кратчайшие сроки. Большой выбор операторов доставки.
              </p>
            </div>
          </li>
        </ol>
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
    pageTitle: 'Наше производство',
    pagePath: '/production'
  })
}
</script>
