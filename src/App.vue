<template>
<div class="wrapper">
      <div class="container main-order-container">
           <Hero />
           <PizzaSizeMenu/>
           <PizzaSize/>
            <Crust/>
            <Customize/>
               <CustomizeWhole/>
            <AddToCart/>
         
      </div>
</div>


</template>

<script>
import PizzaSize from './components/PizzaSize.vue'
import Hero from './components/Hero.vue'
import PizzaSizeMenu from './components/PizzaSizeMenu.vue'
import Crust from './components/Crust.vue'
import Customize from './components/Customize.vue'
import AddToCart from './components/AddToCart.vue'
import CustomizeWhole from './components/CustomizeWhole.vue'
import {provide,ref} from 'vue' 
import store from '@/store'
export default {
  name: 'App',
  components: {
    PizzaSize,
    Hero,
    PizzaSizeMenu,
    Crust,
    Customize,
    AddToCart,
    CustomizeWhole
  },
   setup() {
    provide('store',store)
 
    

  }
}
</script>

<style>

</style>
