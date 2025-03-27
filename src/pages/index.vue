<template>
    <main>
        <!-- Hero Section -->
        <section id="hero" class="md:max-w-[1200px] min-h-[70vh] mx-auto w-full md:pt-[90px] px-4 md:px-0">
            <div class="grid grid-cols-1 md:grid-cols-7">
                <!-- Sidebar Category List -->
                <ul class="hidden md:block col-span-1 gap-6 order-3 md:order-1 md:border-r pt-6  relative overflow-y-auto w-[100px]">
                    <h2 class=" font-bold text-[24px] mb-4 tracking-wider underline">Categories</h2>
                    <div v-if="!pinia.state.isFetchingCategories">

                           <n-button quaternary strong
                           class="mb-2"
                            @click="filterproduct('all')"
                            :tertiary="selectedCategory === 'all'"> All items</n-button>
    
                            <li v-for="(category, index) in pinia.state.categories" :key="index" class="mb-2">
                            <!-- <n-collapse v-if="category.subcategories" arrow-placement="right">
                                <n-collapse-item :title="category.name" :name="category.name">
                                    <div v-for="(sub, subIndex) in category.subcategories" :key="subIndex">
                                        <button @click="handleClick(sub)" class="subcategory-btn">
                                            {{ sub }}
                                        </button>
                                    </div>
                                </n-collapse-item>
                            </n-collapse> -->
    
                            <n-button quaternary strong
                            class=" capitalize"
                            @click="filterproduct(category.name)"
                            :tertiary="category.name === selectedCategory">{{ category.name }}</n-button>
                        </li>
                    </div>

                    <div v-else>
                        <li  v-for="n in 6" :key="n" class="mb-2">
                            <n-skeleton height="32px" width="120px" :sharp="false" />
                        </li>
                    </div>
                </ul>

                <!-- Carousel Section -->
                <div class="md:col-span-4   md:my-10 md:mx-5 relative order-2 md:order-2">
                    <div class="carousel-container">
                        <n-carousel autoplay class="flex gap-x-2">
                            <img
                                v-for="(image, index) in carouselImages"
                                width="100"
                                :key="index"
                                class="carousel-img"
                                :src="image"
                                style="margin: 0 1px;"
                            >
                        </n-carousel>
                        <!-- Fix the indicator position -->
                        <div class="fixed-carousel-indicators"></div>
                    </div>
                </div>

                <div class=" col-span-2 order-1 md:order-3  pt-[160px] pb-6 md:py-10">


                    <n-card title="">

                        <div class="flex  gap-4 mb-4" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#f17315" d="M2 21q-.825 0-1.412-.587T0 19V5q0-.825.588-1.412T2 3h20q.825 0 1.413.588T24 5v14q0 .825-.587 1.413T22 21zm7-7q1.25 0 2.125-.875T12 11t-.875-2.125T9 8t-2.125.875T6 11t.875 2.125T9 14m10 4l2-2l-1.5-2h-1.65q-.15-.45-.25-.962T17.5 12t.1-1.012t.25-.988h1.65L21 8l-2-2q-1.35 1.05-2.175 2.663T16 12t.825 3.338T19 18M2.1 19h13.8q-1.05-1.875-2.9-2.937T9 15t-4 1.063T2.1 19"/></svg>
                            <div class="flex flex-col">
                                <span class="text-[16px] font-semibold tracking-wider">Call to order</span>
                                <span>±2345788990000</span>
                            </div>
                        </div>

                        <div class="flex items-center gap-4" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32"><path fill="#f17315" d="M1.303 3.479v25.043h15.213c9.187 0 14.187-4.276 14.187-12.552c0-8.5-5.421-12.491-14.187-12.491zm15.213-1.296C29.989 2.183 32 10.818 32 15.97c0 8.932-5.5 13.853-15.484 13.853H0V2.183zM3.344 17.807h4.869v8.672H3.344zm5.459-4.364a3.027 3.027 0 1 1-6.054 0c0-4.036 6.053-4.036 6.053 0zm1.858-1.412v2.829h.869c.6 0 1.157-.172 1.157-1.439c0-1.228-.62-1.391-1.157-1.391zm14.47-1.4h1.405v4.229h2.079c-.573-7.677-6.609-9.333-12.099-9.333h-5.849v5.104h.864c1.579 0 2.563 1.072 2.563 2.791c0 1.781-.957 2.839-2.563 2.839h-.864v10.224h5.849c8.921 0 12.025-4.145 12.135-10.224h-3.515v-5.635zm-3.907 3.14h1.016l-.469-1.593h-.083zm-2.193 2.494l1.704-5.635h1.995l1.697 5.635H22.97l-.324-1.093h-1.833l-.317 1.093zm-.671-1.405v1.4h-3.469v-5.629h3.36v1.4h-1.959v.657h1.848v1.4h-1.848v.772z"/></svg>                            <div class="flex flex-col">
                                <span class="text-[16px] font-semibold tracking-wider">Best Deals</span>
                                <!-- <span>±2345788990000</span> -->
                            </div>
                        </div>
                        
                    </n-card>

                </div>

            </div>
        </section>
        <!-- end of hero section -->

        <!-- flash sales section -->
        <section class="relative">
             <FlashSales/>
        </section>

        <MainFooter/>


    </main>
</template>

<script setup>
import { NCollapse, NCollapseItem, NCarousel,NCard ,NButton,NSkeleton} from 'naive-ui';
import { get_all_product,get_all_categories,get_all_cart} from '@/composables/actions';
import { useStore } from "@/stores";

const pinia = useStore()

const selectedCategory = ref('all')


 const filterproduct = (categoryName)=>{
    selectedCategory.value = categoryName
    if(selectedCategory.value === 'all') return pinia.state.filteredProducts = pinia.state.products
    pinia.state.filteredProducts = pinia.state.products.filter(product => product.category === selectedCategory.value)
 }


  onMounted(()=>{
    if(selectedCategory.value === 'all') return pinia.state.filteredProducts = pinia.state.products
  })
    

// Define categories with collapsible subcategories
const categories = [
    { name: "Women’s Fashion", subcategories: ["Dresses", "Shoes", "Accessories"] },
    { name: "Men’s Fashion", subcategories: ["Shirts", "Shoes", "Watches"] },
    { name: "Electronics" },
    { name: "Home & Lifestyle" },
    { name: "Medicine" },
    { name: "Health & Beauty" },
    { name: "Sports & Outdoor" },
    { name: "Baby’s & Toys" },
    { name: "Groceries & Pets" }
];

// Define carousel images
const carouselImages = [
   
    "/carousel/c10.jpg",
    "/carousel/c20.jpg",
    "/carousel/c30.jpg",
    "/carousel/c40.jpg",
    "/carousel/c50.jpg",
];

// Function to handle subcategory click
const handleClick = (subcategory) => {
    console.log("Clicked on:", subcategory);
};


onMounted(async()=>{
    if(pinia.state.products.length) return pinia.state.products
    await get_all_product(1)
    
})


onMounted(async()=>{
    if(pinia.state?.categories.length) return
    await get_all_categories()
    
})


onMounted(async()=>{
    if(pinia.state.isAuthenticated){
        if(pinia.state?.cart.length) return
        await get_all_cart()
        
    }
})
</script>

<style scoped>
/* Sidebar fixed width to prevent layout shift */
ul {
    min-width: 160px;
}

/* Styling for clickable subcategories */
.subcategory-btn {
    display: block;
    width: 100%;
    text-align: left;
    padding: 8px 10px;
    background: none;
    border: none;
    cursor: pointer;
    color: #333;
    transition: background 0.3s;
}

.subcategory-btn:hover {
    background: #f0f0f0;
}

/* Ensuring the carousel does not shift */
.carousel-container {
    width: 100%;
    position: relative;
}

/* Fixing carousel indicator position */
.fixed-carousel-indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
}

/* Styling for carousel images */
.carousel-img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    border-radius: 20px;
}
.n-card {
  max-width: 100%;
  border-radius: 10px;
}

@media (max-width: 768px) {
    .carousel-img {
        height: 240px;
    }
  }

</style>

