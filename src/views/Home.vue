<template>
  <div class="home">
    <Header/>
    <HomeUrun/>
    <Footer/>

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import HomeUrun from '@/components/HomeUrun.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'home',
  components: {
    Header,
    HomeUrun,
    Footer,
    
  }
}
</script>

<style scoped>

</style>
