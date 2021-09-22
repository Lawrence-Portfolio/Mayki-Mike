<template>
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
</template>
