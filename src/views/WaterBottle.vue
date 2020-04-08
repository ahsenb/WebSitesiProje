<template>
  <div class="ToteBag">
      <Header/>
      <WaterBottleUrun/>
      <Footer/>

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import WaterBottleUrun from '@/components/WaterBottleUrun.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'ToteBag',
  components: {
    Header,
    WaterBottleUrun,
    Footer,
  }
}
</script>

<style scoped> 

</style>
