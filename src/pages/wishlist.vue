<template>

   <div>

       <div class="min-h-[80vh] pt-[160px] pb-[50px] md:pt-[130px] relative">
   
           <div class="md:max-w-[1200px] mx-auto w-full h-full px-4  md:px-0 text-white">
   
               <n-breadcrumb>
                   <n-breadcrumb-item @click="navigateTo('/')">
                       <!-- <n-icon :component="MdCash" /> -->
                        Home
                   </n-breadcrumb-item>
                  
                   <n-breadcrumb-item>
                   <!-- <n-icon :component="MdCash" />  -->
                     My Wishlists
                   </n-breadcrumb-item>
               </n-breadcrumb>
   
   
   
               <div class="relatvie">
   
                   <div  class="mt-[50px]">
       
                       <!-- <tag-header text="Related Item"/> -->
                        <div class="flex justify-between items-center mb-6">
                            <h1 class="text-[black] text-lg">Wishlist ({{ pinia.state.likedProducts.length }})</h1>
                            <n-button  @click="showDeleteModal = true"  size="medium" color="#f17315" ghost solid style="width: 100px;">
                                Clear all
                           </n-button>
                        </div>
       
                       <ProductCard :products="pinia.state.wishLists"/>
       
                   </div>
       
                   <div v-if="!pinia.state.wishLists.length" class="flex flex-col items-center justify-center h-[400px] text-center text-gray-700">
                       <!-- Inline SVG Icon -->
                       <svg
                       xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       class="w-24 h-24 mb-4 text-gray-400"
                       >
                       <path
                           fill="#f17315"
                           d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.93V17a1 1 0 0 1-2 0v-.07a8 8 0 1 1 2 0zM12 4a8 8 0 0 1 7.93 7H16a1 1 0 0 0 0 2h3.93A8 8 0 0 1 12 20a8 8 0 0 1-7.93-7H8a1 1 0 0 0 0-2H4.07A8 8 0 0 1 12 4z"
                       />
                       </svg>
                       <h2 class="mb-2 text-2xl font-semibold">No Wishlists Available</h2>
                       <p class="mb-4 text-gray-500">
                         We couldn't find any Wishlists at the moment.
                       </p>
       
                       <n-button @click="navigateTo('/')"
                       class="px-4 py-2 text-white"
                       color="#f17315"
                       >
                       Return to Home
                        </n-button>
                   </div>
               </div>
   
   
               <!-- <div class="mt-[120px]">
                   <tag-header text="Related Item"/>
   
                   <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
                       <ProductCard :products="pinia.state.products"/>
                   </div>
   
               </div> -->
           </div>
   
   
           <n-modal v-model:show="showDeleteModal">
           <n-card
             title="Confirm Deletion"
             closable
             @close="showDeleteModal = false"
             style="width: 400px; max-width: 90vw"
           >
             <p class="mb-4">Are you sure you want to clear all your <b>items</b> from the wishlists?</p>
             <n-space justify="end">
               <n-button @click="showDeleteModal = false">Cancel</n-button>
               <n-button type="error" @click="clearItem">Confirm</n-button>
             </n-space>
           </n-card>
         </n-modal>
   
       </div>

       
    </div>
    
    <MainFooter/>
</template>

<script setup>
import { NBreadcrumb,NBreadcrumbItem,NIcon,NImage,NRate,NButton,NFormItemGi,NInputNumber,NModal,NSpace,NCard } from 'naive-ui'

import { useStore } from "@/stores";

const pinia = useStore()

const route = useRoute();

const showDeleteModal = ref(false)

const lastSegment = route.params.id 

console.log(lastSegment)

const productNames = [
    "Quilted Satin Jacket", "Smart LED TV", "S-Series Comfort Chair", 
    "Gaming Keyboard"
];

const myWishLists = ref(pinia.state.wishLists)

const products = ref([pinia.state.products?.products]);


// pinia.state.wishLists = computed(()=>{
//     return pinia.state.products?.products?.filter(product => pinia.state?.likedProducts.includes(product._id));
// })


const clearItem = ()=>{
    pinia.state.likedProducts = [];
    pinia.state.wishLists = []
    showDeleteModal.value = false
}





</script>