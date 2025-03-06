<template>

    <div class="min-h-[80vh] pt-[160px] pb-[50px] md:pt-[130px]">

        <div class="md:max-w-[1200px] mx-auto w-full h-full px-4  md:px-0 text-white">

            <n-breadcrumb>
                <n-breadcrumb-item>
                    <!-- <n-icon :component="MdCash" /> -->
                     Home
                </n-breadcrumb-item>
                <n-breadcrumb-item>
                <!-- <n-icon :component="MdCash" />  -->
                 Gaming
                </n-breadcrumb-item>
                <n-breadcrumb-item>
                <!-- <n-icon :component="MdCash" />  -->
                  Category
                </n-breadcrumb-item>
            </n-breadcrumb>



            <div class="mt-[50px]">

                <!-- <tag-header text="Related Item"/> -->
                 <div class="flex justify-between items-center">
                     <h1 class="text-[black] text-lg">Wishlist (4)</h1>
                     <n-button round  size="large" color="#f17315" ghost solid style="width: 200px;">
                         Clear all
                    </n-button>
                 </div>

                <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
                    <ProductCard :products="products"/>
                </div>

            </div>

            <div class="mt-[120px]">

                <tag-header text="Related Item"/>

                <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
                    <ProductCard :products="products"/>
                </div>

            </div>
        </div>

    </div>
    
</template>

<script setup>
import { NBreadcrumb,NBreadcrumbItem,NIcon,NImage,NRate,NButton,NFormItemGi,NInputNumber } from 'naive-ui'

const route = useRoute();
const value = ref(4);
const inputNumberValue = null;
const lastSegment = route.params.id 

console.log(lastSegment)

const productNames = [
    "Quilted Satin Jacket", "Smart LED TV", "S-Series Comfort Chair", 
    "Gaming Keyboard"
];


const productImages = [
"/product/game.png",
    "/product/bag.png",
    "/product/cooler.png",
    "/product/gpad.png",
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
</script>