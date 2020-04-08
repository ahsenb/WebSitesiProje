<template>
  <div class="NutritionAcc">
      <Header/>
      <NutritionAccProducts/>
      <Footer/>

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import NutritionAccProducts from '@/components/NutritionAccProducts.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'NutritionAcc',
  components: {
    Header,
    NutritionAccProducts,
    Footer,
  }
}
</script>

<style scoped>

</style>