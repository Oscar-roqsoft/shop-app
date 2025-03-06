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


            <div class="flex flex-col md:flex-row  justify-between mt-6 gap-10">

                <div class=" col-span-2 grid grid-cols-4 gap-4 md:w-[80%]">

                    <div class="w-full grid gap-4 rounded-md">
                        <div v-for="i in 4" class="w-full bg-[#F5F5F5] border"
                        style="max-width: 170px; max-height: 138px;">
                            <n-image
                            width="100%"
                            style="border-radius: 10px !important;"
                             src="/product/gs1.png"
                           />

                        </div>

                    </div>
                    <div class="max-w-[600px] border col-span-3 bg-[#F5F5F5] rounded-md flex object-cover"
                     style="max-width: 500px; max-height: 600px;">
                        <n-image
                            width="100%"
                           src="/product/gamebig.png"
                        />
                    </div>

                </div>

                <div class="text-[black]">

                    <div class="border-b pb-6">
                        <h2 class=" text-[24px] font-semibold leading-[24px] text-[#000]">Havic HV G-92 Gamepad</h2>
    
                        <div class="flex items-center gap-4 mt-4">
                            <n-rate :value="value" readonly />
                            <span>(150 reviews)</span>
                        </div>
    
                        <div class="mt-4">$192.00</div>
    
                        <p class="mt-4">PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                    </div>

                    <div class="pt-6">
                        <div class="flex items-center gap-4">
                            <span>Colours:</span>
                            <div class="flex gap-2">
                                <div v-for="i in 3" >
                                    <div  class="w-[14px] h-[14px] rounded-full bg-black"></div>
                                </div>
                            </div>
                        </div>

                        <div class="flex items-center gap-4 mt-4">
                            <span>Size:</span>
                            <div class="flex items-center gap-4">
                                <div v-for="i in 5">
                                    <n-button tertiary type="info">
                                        XS
                                    </n-button>
                                </div>
                            </div>
                        </div>


                        <div class="mt-4 flex gap-4">
                            <!-- <n-input-number v-model="inputNumberValue" /> -->
                            <div class="grid grid-cols-3 border rounded items-center">
                                <n-button strong secondary size="large">
                                    -
                                </n-button>
                                <div class="flex justify-center items-center">3</div>
                                <n-button color="#f17315" size="large">
                                    +
                                </n-button>
                                 
                             </div>
                            <n-button size="large" color="#f17315" style="width: 200px;">
                                Buy now
                            </n-button>
                            <n-button quaternary strong secondary size="large">
                                <template #icon>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48">
                                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" 
                                    d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.99 10.99 0 0 0 15 8"/>
                                    </svg>
                                </template>
                            </n-button>

                        </div>
                    </div>

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
    "/product/jk.png",
    "/product/tv.png",
    "/product/chair.png",
    "/product/game.png",
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