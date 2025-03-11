

import { defineStore } from 'pinia'

export const useStore = defineStore('Shop', () => {

  const state = reactive({
    user:null,
    isAuthenticated:false,
    products:[],
    current_page:'home',
    selectedNavMenu:'home',
  });

    const setUser = (payload)=>{
        state.user = payload
        console.log(payload)
    }

    const setProducts = (payload)=>{
        state.products = payload
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
      isAuthenticated:false,
      current_page:'account',
      selectedNavMenu:'account',
    };

  }

  return {
    setUser,
    setProducts,
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