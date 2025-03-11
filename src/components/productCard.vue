<template>
        <div 
            v-for="(product, index) in products" 
            :key="index" 
            ref="productCards" 
            class="opacity-0 transform translate-y-10 scale-95 text-black"
        >
            <n-card :title="product.name" @click="navigateTo(`/product/${index}`)">
                <template #cover>
                    <img :src="product.images" class="w-full h-[250px] object-contain">
                </template>

                <div class="flex justify-between items-center">
                    <span class="text-sm font-semibold">${{ product.price }}</span>
                    <div class="flex items-center gap-2">
                        <div
                            v-for="(color, i) in product.colors"
                            :key="i"
                            class="w-[14px] h-[14px] rounded-full"
                            :style="{ backgroundColor: color }"
                        ></div>
                    </div>
                </div>

                <n-rate :value="product.rating" readonly />

                <div class="mt-4">
                    <n-button color="#f17315" style="width: 100%">
                        Add to cart
                    </n-button>
                </div>
            </n-card>
        </div>

        <span class="text-[black] hidden">
            {{ currentPg = currentPage }}
        </span>
        
      
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted } from "vue";
import { NCard, NRate, NButton, NPagination } from "naive-ui";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const {products,currentPage} = defineProps({
    products:Object,
    currentPage:Number,
})

const currentPg = ref(null)
const myproducts = [...products]
const productCards = ref(null)


// Function to apply GSAP animation
const animateProducts = () => {
    nextTick(() => {
        if (productCards.value.length) {
            gsap.fromTo(
                productCards.value,
                { opacity: 0, y: 20, scale: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                }
            );
        }
    });
};


// Run animation on mount
onMounted(() => {
    animateProducts();
});

// Watch for page changes to trigger animation
watch(currentPg, () => {
    console.log(currentPg.value)
    animateProducts();
});

</script>

<style scoped>
.n-card {
    max-width: 100%;
    height: 420px;
    border-radius: 10px;
}

</style>


<!-- <template>
    <div>
        <div ref="productContainer" class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div 
                v-for="(product, index) in paginatedProducts" 
                :key="index" 
                ref="productCards" 
                class="opacity-0 transform translate-y-10 scale-95"
            >
                <n-card :title="product.name">
                    <template #cover>
                        <img :src="product.image" class="w-full h-[200px] object-cover">
                    </template>

                    <div class="flex justify-between items-center">
                        <span class="text-lg font-semibold">${{ product.price }}</span>
                        <div class="flex items-center gap-2">
                            <div
                                v-for="(color, i) in product.colors"
                                :key="i"
                                class="w-[14px] h-[14px] rounded-full"
                                :style="{ backgroundColor: color }"
                            ></div>
                        </div>
                    </div>

                    <n-rate :value="product.rating" readonly />

                    <div class="mt-4">
                        <n-button color="#f17315" style="width: 100%">
                            Add to cart
                        </n-button>
                    </div>
                </n-card>
            </div>
        </div>

        <div class="flex justify-center items-center gap-4 mt-6">
            <n-button @click="prevPage" :disabled="currentPage === 1">
                Prev
            </n-button>
            <span class="text-lg">Page {{ currentPage }} of {{ totalPages }}</span>
            <n-button @click="nextPage" :disabled="currentPage === totalPages">
                Next
            </n-button>
        </div>
    </div>
</template> -->

<!-- <script setup>
import { ref, computed, onMounted, watch } from "vue";
import { NCard, NRate, NButton } from "naive-ui";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Sample product data
const productNames = [
    "Breed Dry Dog Food", "Smart LED TV", "Bluetooth Headphones", 
    "Gaming Keyboard", "Laptop Backpack", "Wireless Mouse", 
    "Men's Running Shoes", "Women's Handbag", "Kitchen Blender"
];

const productImages = [
    "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
    "https://source.unsplash.com/300x200/?electronics",
    "https://source.unsplash.com/300x200/?fashion",
    "https://source.unsplash.com/300x200/?tech",
    "https://source.unsplash.com/300x200/?shoes",
    "https://source.unsplash.com/300x200/?gadgets",
    "https://source.unsplash.com/300x200/?laptop",
    "https://source.unsplash.com/300x200/?bags",
    "https://source.unsplash.com/300x200/?appliance"
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

// Pagination setup
const currentPage = ref(1);
const itemsPerPage = 4;

const totalPages = computed(() => Math.ceil(products.value.length / itemsPerPage));

const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return products.value.slice(start, start + itemsPerPage);
});

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
};

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};

// Watch for page changes to animate the new items
watch(currentPage, () => {
    gsap.fromTo(productCards.value, 
        { opacity: 0, y: 20, scale: 0.95 }, 
        { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1, ease: "power3.out" }
    );
});

onMounted(() => {
    gsap.to(productCards.value, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: productCards.value,
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });
});
</script>

<style scoped>
.n-card {
    max-width: 100%;
    border-radius: 10px;
}
</style> -->
