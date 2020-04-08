<template>
  <div class="Beauty">
      <Header/>
      <BeautyProducts/>
      <Footer/>

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import BeautyProducts from '@/components/BeautyProducts.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Beauty',
  components: {
    Header,
    BeautyProducts,
    Footer,
  }
}
</script>

<style scoped>

</style>