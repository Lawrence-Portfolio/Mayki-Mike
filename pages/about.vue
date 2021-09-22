<template>
  <main class="about">
    <div class="container">
      <h2 class="about__title section-title">
        о компании
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
  </main>
</template>

<script>
export default {
  layout: 'default',
  data: () => ({
    pageTitle: 'О компании',
    pagePath: '/about'
  }),
  head () {
    return {
      title: this.pageTitle
    }
  }
}
</script>
