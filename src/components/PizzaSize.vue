<template>
  <div>
       <div  v-if='store.state.openMenu' class="open">
            
            <div  class="row optionsrow noborder" style="padding:0;">
                <div  v-on:click="store.state.size ='family',store.state.family = !store.state.family,store.state.medium = false,store.state.large = false"  class="col-md-4 no-padding">
                    <div v-bind:class="[ store.state.size=== 'family' && store.state.family == true ? 'active' : '' ]" class="selectedbox">
                        <p>Family (16inch)<br></p>
                    </div>
                </div>
                <div  v-on:click="store.state.size='large', store.state.large = !store.state.large,  store.state.medium = false,store.state.family = false" class="col-md-4">
                    <div v-bind:class="[ store.state.size=== 'large' && store.state.large == true? 'active' : '' ]" class="selectedbox">
                        <p>Large (14 inches)<br></p>
                    </div>
                </div>
                <div  v-on:click="store.state.size='medium',store.state.medium = !store.state.medium ,store.state.family = false,store.state.large = false " class="col-md-4">
                    <div  v-bind:class="[ store.state.size === 'medium' && store.state.medium == true ? 'active' : '' ]"  class="selectedbox">
                        <p>Medium (12 inches)<br></p>
                           
                    </div>
                </div>
            </div>
    
  </div>
  </div>
</template>

<script>
import {inject,reactive} from 'vue'
export default {
  name: 'PizzaSize',
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
