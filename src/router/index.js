import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../views/Homepage.vue'
import Home from '../views/Home.vue'
import Acc from '../views/Acc.vue'
import ToteBag from '../views/ToteBag.vue'
import MoreProducts from '../views/MoreProducts.vue'
import HotBuys from '../views/HotBuys.vue'
import WaterBottle from '../views/WaterBottle.vue'
import TermsofUse from '../views/TermsofUse.vue'
import privacypolicy from '../views/privacypolicy.vue'
import RegisterSayfası from '../views/RegisterSayfası.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import Helloworld from '../views/HelloWorld.vue'
import contactus from '../views/contactus.vue'
import Beuty from '../views/Beuty.vue'
import NutritionAcc from '../views/NutritionAcc.vue'
import Nutrition from '../views/Nutrition.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: Homepage
  },  
  {
    path: '/helloworld',
    name: 'helloworld',
    component: Helloworld
  }, 
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Home
  },
  {
    path: '/acc',
    name: 'acc',
    component: Acc
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterSayfası
  },
  {
    path: '/shopping_cart',
    name: 'shopping_cart',
    component: ShoppingCart
  },
  {
    path: '/totebag',
    name: 'totebag',
    component: ToteBag
  },
  {
    path: '/moreproducts',
    name: 'moreproducts',
    component: MoreProducts
  }
  ,
  {
    path: '/HotBuys',
    name: 'HotBuys',
    component: HotBuys
  },
  {
    path: '/WaterBottle',
    name: 'WaterBottle',
    component: WaterBottle
  },
  {
    path: '/TermsofUse',
    name: 'TermsofUse',
    component: TermsofUse
  },
  {
    path: '/privacypolicy',
    name: 'privacypolicy',
    component: privacypolicy
  },
  {
    path: '/contactus',
    name: 'contactus',
    component:contactus
  },
  {
    path: '/Beauty',
    name: 'Beauty',
    component: Beuty
  },
  {
    path: '/NutritionAcc',
    name: 'NutritionAcc',
    component: NutritionAcc
  },
  {
    path: '/Nutrition',
    name: 'Nutrition',
    component: Nutrition
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
