<template>
  <div class="shopping">
    <Header/>
    <Shopping/>
    <Footer/>


  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Shopping from '@/components/Shopping.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'shopping',
  components: {
    Header,
    Shopping,
    Footer,

    
  }
}
</script>

<style scoped>

</style>