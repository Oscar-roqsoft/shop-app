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
                  {{ myproduct?.name }}
                </n-breadcrumb-item>

            </n-breadcrumb>


            <div class="flex flex-col md:flex-row  justify-between mt-6 gap-6">

                <div class=" col-span-2 grid grid-cols-1 md:grid-cols-4  gap-4 md:w-[65%]">

                    <div class="w-full grid grid-cols-4 md:grid-cols-1 gap-8 md:gap-4 rounded-md order-2 md:order-1 mb-6 md:mb-0 ">
                        <div v-for="(i,index) in 4 " :key="index" class="w-[83px] md:w-[176px_!important] md:h-[137px] bg-[#F5F5F5] border"
                        >
                            <n-image
                            width="100%"
                            style="border-radius: 10px !important;"
                             :src="myproduct.images"
                           />

                        </div>

                    </div>
                    <div class="md:max-w-[600px] border col-span-3 bg-[#F5F5F5] order-1 md:order-2  rounded-md flex object-cover"
                     style="max-width: 100%; max-height: 600px;">
                        <n-image
                            width="100%"
                           :src="myproduct.images"
                        />
                    </div>

                </div>

                <div class="text-[black] md:w-[35%]">

                    <div class="border-b pb-6">
                        <h2 class=" text-[24px] font-semibold leading-[24px] text-[#000]">{{myproduct?.name}}</h2>
    
                        <div class="flex items-center gap-4 mt-4">
                            <n-rate :value="value" readonly />
                            <span>({{ value }} reviews)</span>
                        </div>
    
                        <div class="mt-4">${{ myproduct?.price }}</div>
    
                        <p class="mt-4">PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                    </div>

                    <div class="pt-6">
                        <div class="flex items-center gap-4">
                            <span>Colours:</span>
                            <div class="flex gap-2">
                                <div v-for="(i,index) in myproduct?.colors" :key="index">
                                    <div  class="w-[14px] h-[14px] rounded-full"
                                     :style="{background: `${i}`}"></div>
                                </div>
                            </div>
                        </div>

                        <div class="flex items-center gap-4 mt-4">
                            <span>Size:</span>
                            <div class="flex items-center gap-4">
                                <div v-for="(i,index) in myproduct?.sizes.length ? myproduct?.sizes : ['xl','xxl'] " :key="index">
                                    <n-button tertiary type="info" class=" uppercase">
                                        {{ i }}
                                    </n-button>
                                </div>
                            </div>
                        </div>


                        <div class="mt-4 flex flex-wrap gap-4">
                            <!-- <n-input-number v-model="inputNumberValue" /> -->
                            <div class="grid grid-cols-3 border rounded items-center min-w-[100px]">
                                <n-button strong secondary size="large">
                                    -
                                </n-button>
                                <div class="flex justify-center items-center">3</div>
                                <n-button color="#f17315" size="large">
                                    +
                                </n-button>
                                 
                             </div>
                             
                            <n-button size="large" color="#f17315" style="width: 140px;">
                                Add to cart
                            </n-button>

                            <n-button @click.stop="toggleLike(myproduct?._id)"
                            quaternary strong secondary size="large">
                                <template #icon>
                                    <svg 
                                    :class="{'text-red-500':  pinia.state.likedProducts.includes(myproduct._id), 'text-gray-400': ! pinia.state.likedProducts.includes(myproduct._id)}"
                                    xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from All by undefined - undefined --><path fill="currentColor" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"/></svg>
                                </template>
                            </n-button>

                        </div>
                    </div>

                </div>

            </div>

            <div class="mt-[120px]">

                <tag-header text="Related Item" class="mb-10"/>

                <ProductCard :products="pinia.state.products"/>

            </div>
        </div>

    </div>

    <MainFooter/>
    
</template>

<script setup>

    import { NBreadcrumb,NBreadcrumbItem,NIcon,NImage,NRate,NButton,NFormItemGi,NInputNumber } from 'naive-ui'
    import { useStore } from "@/stores";

    const pinia = useStore()

    const route = useRoute();
    const inputNumberValue = null;
    const lastSegment = ref(route.params.id )

    const myproduct = ref(pinia.state.products?.find(product => product._id === lastSegment.value))

    const value = ref(myproduct.value?.rating);

    const toggleLike = (productId) => {
        
        if (pinia.state.likedProducts.includes(productId)) {
        pinia.state.likedProducts = pinia.state.likedProducts.filter(id => id !== productId);
        pinia.state.wishLists = pinia.state.wishLists?.filter(product => product._id !==   productId);
        } else {
            const filteredProduct = pinia.state.products?.filter(product => product._id === productId);
        pinia.state.likedProducts.unshift(productId);
        pinia.setWishLists([...pinia.state.wishLists,...filteredProduct]);
        }
    };


</script>