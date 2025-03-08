
<template>
    <div class="bg-[#F4F7FA] min-h-full w-screen">
        
        <MainHeader/>
        <slot/>

        <MainFooter/>
    </div>
</template>


<script setup>

const route = useRouter()

const path = route.currentRoute.value.path

console.log(path)

</script>