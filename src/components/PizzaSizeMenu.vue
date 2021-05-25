<template>
   <div  class="row">
                <div @click = 'store.methods.toggleMenu' class="col-md-12 size">
                  
                    <p class="d-inline-block">Select Your Size</p><i class="fa fa-chevron-down float-right"></i>
                    <!-- <p v-if="store.state.requiredBool === true" class="complete">
                        Completed
                    </p>
                    <p v-else class="required">
                        Required
                    </p> -->


      <p 
          v-if="store.state.size=== 'family' && 
          store.state.family == true ||
          store.state.size=== 'large' && 
          store.state.large == true ||
          store.state.size=== 'medium' && 
          store.state.medium == true 
            ? 
          store.state.requiredBool  = true:
          store.state.requiredBool = false" 
          class="complete"
          >
        Completed
        </p>
        <p v-else class="required">
            Required
        </p>
                </div>
            </div>
</template>

<script>
import {inject,reactive} from 'vue'
export default {
  name: 'PizzaSizeMenu',
  setup() {
       const store = inject('store')

       return {store}
  }
}

</script>

<style>
.complete{
  color: green;
}
.required{
  color: red;
}
</style>