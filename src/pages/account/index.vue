<template>
    <div class=" min-h-[70vh] pt-[140px] md:pb-[100px] md:max-w-[1200px] mx-auto w-full h-full px-4  md:px-0 ">

        <div class=" flex justify-center items-center  h-full mx-[16px_!important] md:mx-0">
                <div class="flex overflow-hidden  items-center  border-[#e2e2e2]  h-[650px] w-full rounded-3xl">
    
                    <div class="md:w-[60%] hidden md:block">
    
                        <n-image
                            width="100%"
                            class=""
                            src="/product/phone.png"
                        />
    
                    </div>

                    <div class="md:w-[40%] w-[100%] flex h-full  justify-center md:px-[30px_!important] py-[14px_!important]">

                        <div class="w-full h-[inherit] overflow-y-auto md:p-4 rounded-2xl md:px-[14px_!important] py-[14px_!important]">
                            

                             <span class="text-[24px]">Log in to <h4 class="text-[32px] font-bold mb-[16px_!important] font-stretch-extra-expanded">
                                Exclu<span class="text-[#1aa058]">sive</span></h4></span>

                             <p class="mb-[16px_!important]">You don't have an account? <a href="/account/create" class="text-[#1aa058]">Sign Up</a></p>

                            
                            <div class="flex items-center justify-center">
                              <div class="w-full max-w-md py-8 rounded-lg ">
                          
                                <n-form ref="formRef" :model="modelRef" :rules="rules">
                                  <n-form-item path="email" label="Email">
                                    <n-input size="large" round v-model:value="modelRef.email" type="email" placeholder="Enter your email" />
                                  </n-form-item>
                          
                                  <n-form-item path="password" label="Password">
                                    <n-input size="large" round v-model:value="modelRef.password" type="password" placeholder="Enter your password" />
                                  </n-form-item>
                          
                                  <n-button class="mt-4" type="primary" size="large" round block @click="handleLogin">Login</n-button>
                        
                                  <n-button class="mt-[24px_!important]" ghost color="#4385f5" size="large" round block @click="handleLogin">
                                    <template #icon>
                                        <n-icon>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                                                <path fill="#4285F4" d="M24 9.5c3.2 0 6 .9 8.4 2.6l6.3-6.3C34.9 2 29.7 0 24 0 14.7 0 6.8 5.2 2.8 12.8l7.4 5.7C12.2 12.3 17.7 9.5 24 9.5z"/>
                                                <path fill="#34A853" d="M46.2 24.6c0-1.6-.1-3.2-.4-4.7H24v9.4h12.8c-.6 3-2.3 5.5-4.9 7.2l7.4 5.7c4.4-4 6.9-9.8 6.9-17.6z"/>
                                                <path fill="#FBBC05" d="M10.2 28.6c-1.2-3.6-1.2-7.6 0-11.2l-7.4-5.7c-3.2 6.4-3.2 14 0 20.4l7.4-5.7z"/>
                                                <path fill="#EA4335" d="M24 48c6.5 0 11.9-2.1 15.9-5.7l-7.4-5.7c-2.1 1.4-4.8 2.2-7.6 2.2-6.3 0-11.7-3.8-13.8-9.1l-7.4 5.7C9.8 42.8 16.3 48 24 48z"/>
                                            </svg>
                                        </n-icon>
                                    </template>
                                    Sign In With Google
                                  </n-button>
                                </n-form>
                            </div>
                            </div>

                        </div>



              
                    </div>
    
                </div>
        </div>



    </div>
    
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { NForm, NFormItem, NInput, NButton,NImage } from "naive-ui";
  
  const formRef = ref(null);
  const modelRef = ref({
    email: "",
    password: ""
  });
  
  const rules = {
    email: [
      { required: true, message: "Email is required" },
      { type: "email", message: "Invalid email format" }
    ],
    password: [{ required: true, message: "Password is required" }]
  };
  
  const handleLogin = () => {
    console.log(modelRef.value)
    formRef.value?.validate((errors) => {
      if (!errors) {
        console.log(modelRef.value)
        alert("Login successful!"); // Replace with actual login logic
      }
    });
  };
  </script>
  
  <style scoped>
 
  </style>
  