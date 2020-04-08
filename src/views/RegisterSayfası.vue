<template>
  <div class="register">
      <Header/>
      <Register/>
      <Footer/>

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Register from '@/components/Register.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'register',
  components: {
    Header,
    Register,
    Footer,
  }
}
</script>

<style scoped>

</style>