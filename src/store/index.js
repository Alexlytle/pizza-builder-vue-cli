import { reactive } from "vue";

const state = reactive({
    counter:12,
    size:'',
    active:'',
    medium:false,
    large:false,
    family:false,
    required:'required',
    requiredBool:false,
    openMenu:false,
    crust:'',
    orginalCrust:false,
    thinCrust:false,
    stuffedCrust:false,
    panCrust:false,
    requiredCrust:false,
    custom:'',
    noCustomizations:false,
    customizeWhole:false,
    customLeftRight:false,
    sauce:'',
    traditionalRed:false,
    creamyGarlic:false, 
    oliveOilGarlic:false,
    burgerSuace:false,
    noSauce:false,
    dontToggle:false,
    cartCount:1
})

const methods = {
    increase(){
        state.counter++
    },
     toggleMenu(){
        state.openMenu =  !state.openMenu
        // state.requiredBool =  !state.requiredBool

      },
      finalData(){
        console.log('helolo')
        console.log('Medium',state.medium)
      }
    // isActive(e){
        
    //    state.active = !state.active

       
    //     console.log(state.active)
       
    //     // if(e.target.classList[0] == 'active'){
    //     //     alert()
    //     // }
    // }
}

export default{
    state,
    methods
   
}