<template>
  <div class="Contactus">
      <Header/>
      <Contact/>
      <Footer/>

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Contactus',
  components: {
    Header,
    Contact,
    Footer,
  }
}
</script>

<style scoped>

</style>