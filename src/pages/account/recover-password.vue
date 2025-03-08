<template>
    <div class="min-h-[80vh] pb-24 pt-[140px] md:pb-[130px] md:max-w-[1200px] mx-auto w-full h-full px-4 md:px-0">
      <div class="flex justify-center items-center h-full mx-[16px_!important] md:mx-0">
        <div class="flex items-center overflow-hidden border-[#e2e2e2] h-full md:h-[580px] w-full rounded-3xl">
          <div class="md:w-[60%] hidden md:block">
            <n-image width="100%" src="/bglogin2.jpg" />
          </div>
          <div class="md:w-[40%] w-[100%] flex h-full justify-center md:px-[20px_!important] py-6 md:pt-[2px_!important]">
            <div class="w-full h-[inherit] rounded-2xl md:px-[14px_!important]">
              <h2 class="text-[20px] font-semibold">Recover Password</h2>
              <div class="flex items-center py-4 justify-center">
                <div class="w-full rounded-lg">
                  <n-form ref="formRef" :model="modelRef" :rules="rules">
                    <n-form-item path="email" label="Email">
                      <n-input size="large" v-model:value="modelRef.email" placeholder="Enter your email" type="email" @keydown.enter.prevent />
                    </n-form-item>
                    <n-button :disabled="isSubmitting" style="width: 100% !important; margin-top: 24px !important;" size="large" color="#f17315" @click="handleRecoverPassword">
                      <div class="flex items-center gap-4">
                        <n-spin v-if="isSubmitting" size="small" stroke="#fff" />
                        <span v-else class="text-[#fff]">Recover Password</span>
                      </div>
                    </n-button>
                  </n-form>
                  <p class="mt-[24px_!important] text-center">
                    Remember your password? <a href="/account" class="text-[#f17315] underline">Sign In</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { 
    NForm, 
    NFormItem, 
    NInput, 
    NButton, 
    NSpin, 
    NImage 
  } from 'naive-ui';
  
  const formRef = ref(null);
  const isSubmitting = ref(false);
  const modelRef = ref({
    email: ''
  });
  const rules = {
    email: [
      { required: true, message: 'Email is required', trigger: 'blur' },
      { type: 'email', message: 'Invalid email address', trigger: ['blur', 'change'] }
    ]
  };
  
  const handleRecoverPassword = () => {
    formRef.value?.validate((errors) => {
      if (!errors) {
        isSubmitting.value = true;
        setTimeout(() => {
          isSubmitting.value = false;
          alert('Recovery email sent!');
        }, 2000);
      }
    });
  };
  </script>