<template>

        <div v-if="!pinia.state.isFetchingProduct && !pinia.state.products.length" class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div
              v-for="(product) in products"
              :key="product._id"
              ref="productCards"
              class="opacity-0 transform translate-y-10 scale-95 text-black relative"
            >
              <n-card :title="product?.name" @click="navigateTo(`/product/${product._id}`)">
                <template #cover>
                  <img :src="product?.images" class="w-full h-[250px] object-contain">
                </template>
          
                <!-- Like Button -->
                <button
                  class="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors duration-300"
                  @click.stop="toggleLike(product._id)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    :class="{'text-red-500':  pinia.state.likedProducts.includes(product._id), 'text-gray-400': ! pinia.state.likedProducts.includes(product._id)}"
                    class="transition-colors duration-300"
                  >
                    <path
                      fill="currentColor"
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    />
                  </svg>
                </button>
          
                <div class="flex justify-between items-center">
                  <span class="text-sm font-semibold">${{ product?.price }}</span>
                  <div class="flex items-center gap-2">
                    <div
                      v-for="(color, i) in product?.colors"
                      :key="i"
                      class="w-[14px] h-[14px] rounded-full"
                      :style="{ backgroundColor: color }"
                    ></div>
                  </div>
                </div>
          
                <n-rate :value="product?.rating" readonly />
          
                <div class="mt-4">
                  <n-button color="#f17315" style="width: 100%">
                    Add to cart
                  </n-button>
                </div>
              </n-card>
            </div>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <!-- Skeleton Loader -->
            <div
            v-for="n in 8"
            :key="n"
            class="w-full max-w-xs p-4 border border-gray-200 rounded-lg shadow animate-pulse"
            >
            <!-- Image Placeholder -->
            <div class="w-full h-48 bg-gray-300 rounded"></div>

            <!-- Text Placeholder -->
            <div class="mt-4 space-y-2">
                <div class="h-4 bg-gray-300 rounded w-3/4"></div>
                <div class="h-4 bg-gray-300 rounded w-1/2"></div>
            </div>

            <!-- Button Placeholder -->
            <div class="mt-4 h-10 bg-gray-300 rounded"></div>
            </div>
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
  import { useStore } from "@/stores";

  const pinia = useStore()
  
  // Props
  const { products, currentPage } = defineProps({
    products: Array,
    currentPage: Number,
  });
  
  // State
  const currentPg = ref(null);
  const productCards = ref(null);
  const likedProducts = ref([]);
  
  // Emit
  const emit = defineEmits(['like-product']);
  
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
  

  // Toggle like status
  const toggleLike = (productId) => {
    if (pinia.state.likedProducts.includes(productId)) {
      pinia.state.likedProducts = pinia.state.likedProducts.filter(id => id !== productId);
      pinia.state.wishLists = pinia.state.wishLists?.filter(product => product._id !==   productId);
    } else {
        const filteredProduct = pinia.state.products?.products?.filter(product => product._id === productId);
      pinia.state.likedProducts.unshift(productId);
      pinia.setWishLists([...pinia.state.wishLists,...filteredProduct]);
    }
    emit('like-product', productId);
  };
  
  // Run animation on mount
  onMounted(() => {
    animateProducts();
  });
  
  // Watch for page changes to trigger animation
  watch(currentPg, () => {
    animateProducts();
  });

  watch(() => pinia.state.filteredProducts,(newv)=>{
    animateProducts();
  });

  watch(() => pinia.state.isFetchingProduct,(newv)=>{
    animateProducts();
  });
  

  watch(()=> pinia.state.wishLists,(newv)=>{
        console.log('worked')
        // animateProducts()
    })

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
