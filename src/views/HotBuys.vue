<template>
  <div class="HotBuys">
      <Header/>
      <HotBuysProduct/>
      <Footer/>

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import HotBuysProduct from '@/components/HotBuysProduct.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HoteBuys',
  components: {
    Header,
    HotBuysProduct,
    Footer,
  }
}
</script>

<style scoped> 

</style>
