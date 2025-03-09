
// import { defineStore } from 'pinia'

// import { createPinia } from 'pinia'
// import  piniaPluginPersistedstate from 'pinia-plugin-persistedstate'





// export const useStore = defineStore('BelugarStore', () => {
//     const state = {
//       selectedNavMenu:'home',
//       pricingPlans:[],


//     }

//     const setpricingPlans = (payload)=>{
//       state.pricingPlans = payload
//     }

//     return { state,setpricingPlans }
//   }, 
//   {persist: {
//     storage: piniaPluginPersistedstate.localStorage,
//   }},
// )


// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
// }


import { defineStore } from 'pinia'

export const useStore = defineStore('Shop', () => {

  const state = reactive({
    user:null,
    testimonial:[],
    current_page:'home',
    selectedNavMenu:'home',
  });

    const setUser = (payload)=>{
        state.user = payload
        console.log(payload)
    }
    const setTestimonial = (payload)=>{
        state.testimonial = payload
    }

    const setpricingPlans = (payload)=>{
            state.pricingPlans = payload
    }
  const setCountries = (payload) => {
    state.countries = payload
  }
  const setFAQs = (payload) => {
    state.FAQs = payload
  }
 
 

  const clearUser =()=>{
    state = {
      user:null,
      current_page:'account',
      selectedNavMenu:'account',
    };

  }

  return {
    setUser,
    state,
    clearUser
    
  }

}, {persist: {
    storage: persistedState.localStorage,
  }},
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}