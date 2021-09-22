<template>
  <div>
    <Header />
    <TopBanner/>
    <Nuxt />
    <QualityInfo/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import TopBanner from '@/components/block/TopBanner'
import QualityInfo from '@/components/section/QualityInfo'
export default {
  components: {
    Header,
    Footer,
    TopBanner,
    QualityInfo
  }
}
</script>
