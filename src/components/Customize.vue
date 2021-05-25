<template>
  <div v-if="store.state.orginalCrust ==true && store.state.openMenu === true ||
            store.state.thinCrust==true && store.state.openMenu === true|| 
            store.state.stuffedCrust ==true && store.state.openMenu === true ||
             store.state.panCrust ==true && store.state.openMenu === true
             
            "
  
  class="row optionsrow">
                <div class="col-xl-12">
                    <div>
                        <p>Customize Pizza</p>
                    </div>
                    <p class="requiredornot">completed</p>
                </div>
                <div 
                     v-on:click="store.state.custom ='noCustomizations',
                     store.state.noCustomizations = !store.state.noCustomizations,
                     store.state.customizeWhole = false,
                     store.state.customLeftRight = false  
                     "
                      class="col-md-4">
    <div v-bind:class="[ store.state.custom=== 'noCustomizations' && store.state.noCustomizations == true ? 'active' : '' ]"
                    
                    class="selectedbox">
                        <p>No Customizations</p>
                      
                    </div>
                </div>
                <div 
                     v-on:click="store.state.custom ='customizeWhole',
                     store.state.customizeWhole = !store.state.customizeWhole,
                     store.state.noCustomizations = false,
                     store.state.customLeftRight = false  
                     "
                      class="col-md-4">
    <div v-bind:class="[ store.state.custom=== 'customizeWhole' && store.state.customizeWhole == true ? 'active' : '' ]"
                    
                    class="selectedbox">
                        <p>Customize Whole</p>
                      
                    </div>
                </div>
                <div 
                     v-on:click="store.state.custom ='customLeftRight',
                     store.state.customLeftRight = !store.state.customLeftRight,
                     store.state.customizeWhole = false,
                     store.state.noCustomizations = false  
                     "
                      class="col-md-4">
    <div v-bind:class="[ store.state.custom=== 'customLeftRight' && store.state.customLeftRight == true ? 'active' : '' ]"
                    
                    class="selectedbox">
                        <p>Customize  Right/Left</p>
                      
                    </div>
                </div>
            </div>
</template>

<script>
import {inject} from 'vue'
export default {
  name: 'Customize',
  setup() {
       const store = inject('store')

       return {store}
  }
}
</script>

<style>

</style>