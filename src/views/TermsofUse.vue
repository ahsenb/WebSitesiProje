<template>
  <div class="TermsofUse">
      <Header/>
      <TermsDialog/>
      <Footer/>

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import TermsDialog from '@/components/TermsDialog.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'TermsofUse',
  components: 
  {
    Header,
    TermsDialog,
    Footer,
  }
}
</script>

<style scoped>

</style>
