<template>

    <div class="md:max-w-[1200px] mx-auto w-full h-full px-4 py-20 md:px-0 text-white">

        <!-- <TagHeader /> -->

        <div ref="productContainer" class="grid grid-cols-1 md:grid-cols-4 gap-6">

            <ProductCard :products="paginatedProducts" :currentPage="currentPage"/>
      
        
        </div>

        <div class="mt-10 flex justify-center">
            <n-pagination v-model:page="currentPage" :page-count="pageCount" :page-slot="4" />
        </div>

       

    </div>


    
</template>


<script setup>
import { ref, computed, watch, nextTick, onMounted } from "vue";
import { NCard, NRate, NButton, NPagination } from "naive-ui";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);


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

const products = ref(generateRandomProducts());
const productCards = ref([]);
const currentPage = ref(1);
const itemsPerPage = 4;

// Compute total page count dynamically
const pageCount = computed(() => Math.ceil(products.value.length / itemsPerPage));

const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return products.value.slice(start, start + itemsPerPage);
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