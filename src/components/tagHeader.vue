<template>

    <div class="flex items-center border-l-2 px-2 border-[#f17315] text-sm capitalize text-black">
        {{ text }}
    </div>

</template>

<script setup>

const {text} = defineProps({
    text:String,
})


</script>