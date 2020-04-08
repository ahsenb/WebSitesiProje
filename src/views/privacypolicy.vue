<template>
  <div class="acc">
      <Header/>
      <ppin/>
      <Footer/>

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import ppin from '@/components/ppin.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'acc',
  components: {
    Header,
    ppin,
    Footer,
  }
}
</script>

<style scoped>

</style>