<template>
  <div class="Nutrition">
      <Header/>
      <NutritionProducts/>
      <Footer/>

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import NutritionProducts from '@/components/NutritionProducts.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Nutrition',
  components: {
    Header,
    NutritionProducts,
    Footer,
  }
}
</script>

<style scoped>

</style>