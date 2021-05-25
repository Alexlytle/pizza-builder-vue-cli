<template>

      <div v-if = "
            store.state.medium ===true && 
            store.state.openMenu === true ||
            store.state.large ===true && 
            store.state.openMenu === true ||
            store.state.family ===true && 
            store.state.openMenu === true 
                    
                    "  class="row optionsrow">
                <div  class="col-md-4 col-xl-12">
                    <div>
                        <p>Select your crust</p>
                         <p 
                         v-if="store.state.crust=== 'stuffedCrust' && store.state.stuffedCrust == true || 
                               store.state.crust=== 'original' && store.state.orginalCrust == true ||
                               store.state.crust=== 'thinCrust' && store.state.thinCrust == true ||
                                store.state.crust=== 'panCrust' && store.state.panCrust == true 
                               ?store.state.requiredCrust = true: store.state.requiredCrust = false" 
                         class="complete"
                         >
                        Completed
                        </p>
                        <p v-else class="required">
                            Required
                        </p>

                    </div>
                </div>
                <div 
                     v-on:click="store.state.crust ='original',
                     store.state.orginalCrust = !store.state.orginalCrust,
                     store.state.thinCrust = false,
                     store.state.stuffedCrust = false,
                     store.state.panCrust = false
                    
                     "   
                    class="col-md-4">
                    <div v-bind:class="[ store.state.crust=== 'original' && store.state.orginalCrust == true ? 'active' : '' ]" class="selectedbox">
                        <p>Original<br>$14.99</p>
                    </div>
                </div>
                <div 
                     v-on:click="store.state.crust ='stuffedCrust',
                     store.state.stuffedCrust = !store.state.stuffedCrust,
                     store.state.thinCrust = false,
                     store.state.orginalCrust = false,
                     store.state.panCrust = false
                      
                     "
                      class="col-md-4">
                    <div 
                    v-bind:class="[ store.state.crust=== 'stuffedCrust' && store.state.stuffedCrust == true ? 'active' : '' ]"
                    
                    class="selectedbox">
                        <p>Stuffed<br>$14.99</p>
                      
                    </div>
                </div>
                <div 
                     v-on:click="store.state.crust ='thinCrust',
                     store.state.thinCrust = !store.state.thinCrust,
                     store.state.stuffedCrust = false,
                     store.state.orginalCrust = false,
                     store.state.panCrust = false,
                      store.state.requiredCrust = !store.state.requiredCrust 
                     "
                     class="col-md-4">
                    <div v-bind:class="[ store.state.crust=== 'thinCrust' && store.state.thinCrust == true ? 'active' : '' ]"
                         class="selectedbox">
                        <p>Thin Crust<br>$14.99</p>
                    </div>
                </div>
                 <div v-on:click="store.state.crust ='panCrust',
                     store.state.panCrust = !store.state.panCrust,
                     store.state.stuffedCrust = false,
                     store.state.orginalCrust = false,
                      store.state.thinCrust = false,
                       store.state.requiredCrust = !store.state.requiredCrust 
                     "
                     v-if = "store.state.large ===true && 
                            store.state.openMenu === true " 
                    class="col-md-4">
                    <div v-bind:class="[ store.state.crust=== 'panCrust' && store.state.panCrust == true ? 'active' : '' ]" class="selectedbox pan">
                        <p>Pan<br>$12.99</p>
                    </div>
                </div>
            </div>
</template>

<script>
import {inject} from 'vue'
export default {
  name: 'Size',
  setup() {
       const store = inject('store')

       return {store}
  }
}
</script>

<style>
.pan{
    margin-top: 20px;
}
</style>