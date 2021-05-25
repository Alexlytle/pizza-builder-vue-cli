<template>
        <div class="row hero-row">
                <div class="col-md-6"><img src="../assets/img/pizza.jpg"></div>
                <div class="col-xl-6">
                    <h1><strong>Create Your Own</strong><br></h1>
                    <p>Choose your size, crust, and up to 5 toppings.<br><br>Currently, some of our Papa Murphy’s stores are experiencing periodic outages of Salami. We apologize for any inconvenience.<br></p>
                </div>
            </div>
</template>

<script>
import {inject} from 'vue'
export default {
setup() {
       const store = inject('store')
       return {store}
  }
}
</script>

