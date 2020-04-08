<template>
  <div class="moreproducts">
      <Header/>
      <MPUrun/>
      <Footer/>

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import MPUrun from '@/components/MPUrun.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'moreproducts',
  components: {
    Header,
    MPUrun,
    Footer,
  }
}
</script>

<style scoped>

</style>
