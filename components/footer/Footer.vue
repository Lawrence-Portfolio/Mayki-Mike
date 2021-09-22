<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__logo">
          <img src="@/assets/icons/logoBlack.svg" alt="MAYKI MIKE">
        </div>
        <FooterContent/>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterContent from '@/components/footer/FooterContent'
export default {
  components: {
    FooterContent
  }
}
</script>
