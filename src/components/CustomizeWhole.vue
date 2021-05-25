<template>
<div v-if="store.state.customizeWhole == true">

             
             <div class="row optionsrow">
                 <div class="col-12">
                    <div>
                        <p>Select Your Sauce</p>
                    </div>
                    <p class="d-inline">completed</p><i class="fa fa-check"></i>
                    <p>Scroll down to customize sauce, included toppings, and additional toppings.<br></p>
                </div>

                    <div class="suacewrapper col-xl-4">
                     <div 
                     v-on:click="store.state.sauce ='traditionalRed',
                     store.state.traditionalRed = !store.state.traditionalRed,
                     store.state.creamyGarlic =false,
                      store.state.oliveOilGarlic = false,
                       store.state.burgerSuace = false
                     "
                      class="">
    <div v-bind:class="[ store.state.sauce=== 'traditionalRed' && store.state.traditionalRed == true ? 'active' : '' ]"
                    
                    class="selectedbox">
                         <h1>Traditional Red</h1>
                    </div>
                </div>
                      <select  v-if = " store.state.traditionalRed === true" class="center-select">
                        <optgroup label="This is a group">
                            <option value="12" selected="">This is item 1</option>
                            <option value="13">This is item 2</option>
                            <option value="14">This is item 3</option>
                        </optgroup>
                    </select>
                </div>
                    
                
                <div class="suacewrapper col-xl-4">
                     <div 
                     v-on:click="store.state.sauce ='creamyGarlic',
                     store.state.creamyGarlic = !store.state.creamyGarlic,
                     store.state.traditionalRed = false,
                      store.state.oliveOilGarlic = false,
                       store.state.burgerSuace = false,
                        store.state.noSauce = false
                     "
                      class="">
    <div v-bind:class="[ store.state.sauce=== 'creamyGarlic' && store.state.creamyGarlic == true ? 'active' : '' ]"
                    
                    class="selectedbox">
                         <h1>Creamy Garlic</h1>
                    </div>
                </div>
                      <select class="center-select" v-if = " store.state.creamyGarlic === true" >
                        <optgroup label="This is a group">
                            <option value="12" selected="">This is item 1</option>
                            <option value="13">This is item 2</option>
                            <option value="14">This is item 3</option>
                        </optgroup>
                    </select>
                </div>



                 <div class="suacewrapper col-xl-4">
                     <div 
                     v-on:click="store.state.sauce ='oliveOilGarlic',
                     store.state.oliveOilGarlic = !store.state.oliveOilGarlic,
                     store.state.traditionalRed = false,
                         store.state.creamyGarlic = false,
                          store.state.burgerSuace = false,
                           store.state.noSauce = false
                     "
                      class="">
    <div v-bind:class="[ store.state.sauce=== 'oliveOilGarlic' && store.state.oliveOilGarlic == true ? 'active' : '' ]"
                    
                    class="selectedbox">
                         <h1>Olive Oil & Garlic</h1>
                    </div>
                </div>
                      <select v-if = " store.state.oliveOilGarlic === true" class="center-select">
                        <optgroup label="This is a group">
                            <option value="12" selected="">This is item 1</option>
                            <option value="13">This is item 2</option>
                            <option value="14">This is item 3</option>
                        </optgroup>
                    </select>
                </div>
                <div class="suacewrapper col-xl-4">
                     <div 
                     v-on:click="store.state.sauce ='burgerSuace',
                     store.state.burgerSuace = !store.state.burgerSuace,
                     store.state.traditionalRed = false,
                         store.state.creamyGarlic = false,
                          store.state.noSauce = false,
                           store.state.oliveOilGarlic = false
                     "
                      class="">
    <div v-bind:class="[ store.state.sauce=== 'burgerSuace' && store.state.burgerSuace == true ? 'active' : '' ]"
                    
                    class="selectedbox">
                         <h1>Burger Sauce</h1>
                    </div>
                </div>
                      <select v-if="store.state.burgerSuace== true" class="center-select">
                        <optgroup label="This is a group">
                            <option value="12" selected="">This is item 1</option>
                            <option value="13">This is item 2</option>
                            <option value="14">This is item 3</option>
                        </optgroup>
                    </select>
                </div>




              <div class="suacewrapper col-xl-4">
                     <div 
                     v-on:click="store.state.sauce ='noSauce',
                     store.state.noSauce = !store.state.noSauce,
                     store.state.traditionalRed = false,
                     store.state.creamyGarlic = false,
                     store.state.burgerSuace = false,
                     store.state.oliveOilGarlic = false
                     "
                      class="">
    <div v-bind:class="[ store.state.sauce=== 'noSauce' && store.state.noSauce == true ? 'active' : '' ]"
                    
                    class="selectedbox">
                         <h1>No sauce</h1>
                    </div>
                </div>
                      
                </div>

            </div>
        
</div>
</template>

<script>
import {inject} from 'vue'
export default {
  name: 'CustomizeWhole',
  setup() {
       const store = inject('store')

       return {store}
  }
}
</script>
<style scoped>
.selectedbox h1 {
    font-size: 20px;
    
}
.selectedbox{
    margin-bottom: 20px;
    height: 90px;
}
.center-select {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%,-60%);
    border: 1px solid #eee;
    height: 28%;
    background: linear-gradient(to bottom, white, #e6e6e6);
    width: 85%;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}
</style>