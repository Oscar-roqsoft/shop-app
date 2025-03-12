<template>

    <div v-if="paginatedProducts" class="md:max-w-[1200px] mx-auto w-full h-full px-4 py-20 md:px-0 text-white">

        <!-- <TagHeader /> -->
        <div ref="productContainer" >

            <ProductCard :products="paginatedProducts" :currentPage="currentPage"/>
        
        </div>

        <div class="mt-10 flex justify-center">
            <n-pagination v-model:page="currentPage" :page-count="pageCount" :page-slot="4" />
        </div>

       

    </div>
<!-- 
    <div v-else class="flex flex-col items-center justify-center h-[400px] text-center text-gray-700">
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
            <h2 class="mb-2 text-2xl font-semibold">No Products Available</h2>
            <p class="mb-4 text-gray-500">
            We couldn't find any products at the moment. Please check back later or explore other categories.
            </p>

            <n-button
            class="px-4 py-2 text-white"
            color="#f17315"
            >
            Return to Home
        </n-button>
    </div> -->


    
</template>


<script setup>
import { ref, computed, watch, nextTick, onMounted } from "vue";
import { NCard, NRate, NButton, NPagination } from "naive-ui";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useStore } from "@/stores";

const pinia = useStore()

console.log('PRDUCTS:',pinia.state.products.products)


const productNames = [
"Quilted Satin Jacket", "Smart LED TV", "S-Series Comfort Chair", 
    "Gaming Keyboard", "Gucci duffle bag", "RGB liquid CPU Cooler", 
    "GP11 Shooter USB Gamepad", "Women's Handbag", "Kitchen Blender"
];

const productImages = [
    "/product/jk.png",
    "/product/tv.png",
    "/product/chair.png",
    "/product/game.png",
    "/product/bag.png",
    "/product/cooler.png",
    "/product/gpad.png",
    
    "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
    "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
    "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
    // "https://source.unsplash.com/300x200/?electronics",
    // "https://source.unsplash.com/300x200/?fashion",
    // "https://source.unsplash.com/300x200/?tech",
    // "https://source.unsplash.com/300x200/?shoes",
    // "https://source.unsplash.com/300x200/?gadgets",
    // "https://source.unsplash.com/300x200/?laptop",
    // "https://source.unsplash.com/300x200/?bags",
    // "https://source.unsplash.com/300x200/?appliance"
];




// Generate random products

const generateRandomProducts = () => {
    return productNames.map((name, index) => ({
        name,
        image: productImages[index] || productImages[0],
        price: (Math.random() * 500 + 50).toFixed(2),
        rating: Math.floor(Math.random() * 5) + 1,
        colors: Array.from({ length: 3 }, () => 
            `#${Math.floor(Math.random() * 16777215).toString(16)}`
        )
    }));
};

// const products = ref(pinia.state.products.products);
const products = computed(()=>{
    const items = pinia.state.filteredProducts.length ? pinia.state.filteredProducts : pinia.state.products.products
    return items
})

const productCards = ref([]);
const currentPage = ref(1);
const itemsPerPage = 4;

// Compute total page count dynamically
const pageCount = computed(() => Math.ceil(products.value.length / itemsPerPage));

const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return products.value?.slice(start, start + itemsPerPage);
});

// Function to apply GSAP animation


</script>

<style scoped>
.n-card {
    max-width: 100%;
    border-radius: 10px;
}
</style>


<!-- <ProductCard :products="paginatedProducts" :currentPage="currentPage"/> -->