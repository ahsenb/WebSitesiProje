<template>
  <div class="homepage">
    <Header/>
    <Slider/>
    <Footer/>
    <Loading/>

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Slider from '@/components/Slider.vue'
import Footer from '@/components/Footer.vue'
import Loading from '@/components/Loading.vue'

export default {
  name: 'homepage',
  components: {
    Header,
    Slider,
    Footer,
    Loading
  }
}
</script>

<style scoped>

</style>