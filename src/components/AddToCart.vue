<template>
  <div class="container">
      <div class="row  justify-content-end">
          <div class="col-md-6 cartwrapper  align-items-center">
              <p>Quantity</p>
                <div class="addtocart">
                        <button @click="store.state.cartCount--">-</button>
                        <input type="text" :value="store.state.cartCount">
                        <button @click="store.state.cartCount++">+</button>
                </div>

    <button @click="store.methods.finalData"  :disabled="store.state.customizeWhole == true ||
                                                        store.state.customLeftRight == true ||
                                                        store.state.noCustomizations == true ?false:true" 
    id = 'pizzaFormAddToCart'
    :class="[store.state.customizeWhole == true ||
            store.state.customLeftRight == true ||
            store.state.noCustomizations == true ?'pizzaFormAddToCart':'notActive']"
    
    >Add To Cart</button>
              
          </div>
      </div>
  </div>
</template>


<script>
import {inject} from 'vue'
export default {
  name: 'AddToCart',
  setup() {
       const store = inject('store')

       return {store}
  }
}
</script>

<style scoped>
button{
    height: 33px;
    border: none;
    background: white;
    color: red;
}
p{
    padding: 0;
    margin: 0;
}
.cartwrapper{
    display: flex;
    justify-content: space-between;
    padding: 0;
}
.pizzaFormAddToCart{
        background: #cf4526;
    width: 200px;
    height: 58px;
    color: white;
    border: none;
    border-radius: 5px;
    font-weight: bold;
}
input[type="text"] {
   height: 33px;
    border: none;
    background: white;
    color: red;
        width: 50px;
        text-align: center;
}
.addtocart{
    border: 1px solid #eee;
    font-size: 25px;
}
.notActive{
    background: white;
    width: 200px;
    height: 58px;
    color: black;
    border: 1px solid #bdbcbc;
    border-radius: 5px;
    font-weight: bold;
}
</style>