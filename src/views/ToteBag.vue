<template>
  <div class="ToteBag">
      <Header/>
      <ToteBagUrun/>
      <Footer/>

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import ToteBagUrun from '@/components/ToteBagUrun.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'ToteBag',
  components: {
    Header,
    ToteBagUrun,
    Footer,
  }
}
</script>

<style scoped> 

</style>
