<template>
    <div class="min-h-[80vh] flex flex-col justify-center items-center px-4">
      <div class="md:max-w-[1200px] mx-auto w-full h-full">
        <!-- Breadcrumb Navigation -->
        <n-breadcrumb class="mb-6">
          <n-breadcrumb-item> Home </n-breadcrumb-item>
          <n-breadcrumb-item> 404 Page </n-breadcrumb-item>
        </n-breadcrumb>
  
        <!-- Content Section -->
        <div class="flex flex-col justify-center gap-10 items-center min-h-[450px]">
          <!-- Text Content -->
          <div class="text-center md:text-left space-y-4">
            <h1 class="text-3xl font-bold text-primary">404</h1>
            <p class="text-gray-500 text-lg">
              Oops! The page you're looking for doesn't exist.
            </p>
            <n-button @click="goHome" class="mt-4" color="#f17315">Go Home</n-button>
          </div>
  
          <!-- Animated Image -->
          <div ref="errorImage" class="bg-[url('/bg/404-error.png')] bg-cover rounded-md min-h-[300px]"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import { onMounted, ref } from 'vue';
  import {
    NBreadcrumb,
    NBreadcrumbItem,
    NButton
  } from 'naive-ui';

  import gsap from 'gsap';
  
  const router = useRouter();
  const goHome = () => {
    router.push('/');
  };
  
  const errorImage = ref(null);
  
  onMounted(() => {
    gsap.from(errorImage.value, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    });
  });
  </script>
  