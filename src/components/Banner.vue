<template>
<div>
  <div  class="row">
                <div   @click = 'toggleMenu' class="col-md-12 size">
                  
                    <p class="d-inline-block">Select Your Sizes</p>
                    <i class="fa fa-chevron-down float-right"></i>
                    <p class="requiredornot">sd</p>
                </div>
            </div>
        <div  v-if='openMenu' class="open">
</div>
</template>

<script>
import {inject} from 'vue'
export default {
  name: 'Banner',
  setup() {
       const store = inject('store')

       return {store}
  }


  
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.active{
  border: 1px solid red;
}
</style>
