

import { defineStore } from 'pinia'

export const useStore = defineStore('Shop', () => {

  const state = reactive({
    user:null,
    isAuthenticated:false,
    isFetchingProduct:false,
    isFetchingCategories:false,
    products:[],
    categories:[],
    filteredProducts:null,
    likedProducts:[],
    wishLists:[],
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
    const setCategories = (payload)=>{
        state.categories = payload
    }

    const setWishLists = (payload)=>{
        state.wishLists = payload
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
  const updateData =()=>{
    state.products =[]
  }

  return {
    setUser,
    setProducts,
    state,
    clearUser,
    setWishLists,
    updateData,
    setCategories
    

    
  }

}, {persist: {
    storage: persistedState.localStorage,
  }},
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}