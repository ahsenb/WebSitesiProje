<template>
  <div class="acc">
      <Header/>
      <HomeAcc/>
      <Footer/>

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import HomeAcc from '@/components/HomeAcc.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'acc',
  components: {
    Header,
    HomeAcc,
    Footer,
  }
}
</script>

<style scoped>

</style>
