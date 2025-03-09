<template>
    <div class="min-h-[80vh] pb-24 pt-[140px] md:pb-[130px] md:max-w-[1200px] mx-auto w-full h-full px-4 md:px-0">
      <div class="flex justify-center items-center h-full mx-[16px_!important] md:mx-0">
        <div class="flex items-center overflow-hidden border-[#e2e2e2] h-full md:h-[580px] w-full rounded-3xl">
          

          <div class="md:w-[60%] hidden md:block">
            <n-image width="100%" src="/bglogin2.jpg" />
          </div>
  

          <div class="md:w-[40%] w-full flex h-full justify-center items-center md:px-[20px_!important] py-6 md:pt-[2px_!important]">
            <div class="w-full h-[inherit] flex flex-col justify-center  rounded-2xl md:px-[14px_!important]">
              <h2 class="text-[20px] font-semibold">Recover Password</h2>
  
              <div class="flex items-center py-4 justify-center">
                <div class="w-full rounded-lg">
                  <n-form ref="formRef" :model="modelRef" :rules="rules">
                    <!-- Step 1: Enter Email -->
                    <n-form-item v-if="step === 1" path="email" label="Email">
                      <n-input size="large" v-model:value="modelRef.email" placeholder="Enter your email" type="email" />
                    </n-form-item>
  
                    <n-row v-if="step === 1" :gutter="[0, 2]">
                      <n-col :span="24">
                        <n-button :disabled="isSubmitting" size="large" color="#f17315" block @click="sendVerificationCode">
                          <div class="flex items-center gap-4">
                            <n-spin v-if="isSubmitting" size="small" stroke="#fff" />
                            <span v-else class="text-[#fff]">Send Code</span>
                          </div>
                        </n-button>
                      </n-col>
                    </n-row>
  
                    <!-- Step 2: Enter Code -->
                    <div v-if="step === 2">
                      <n-form-item path="code" label="Enter Verification Code">
                        <n-input size="large" v-model:value="modelRef.code" placeholder="Enter 6-digit code" />
                      </n-form-item>
  
                      <!-- Countdown Timer -->
                      <p class="text-sm text-gray-600 mt-2">Code expires in {{ countdownText }}</p>
  
                      <n-row :gutter="[0, 2]">
                        <n-col :span="24">
                          <n-button
                            :disabled="!modelRef.code || isVerifying"
                            size="large"
                            color="#f17315"
                            block
                            @click="verify_Code"
                          >
                            <div class="flex items-center gap-4">
                              <n-spin v-if="isVerifying" size="small" stroke="#fff" />
                              <span v-else class="text-[#fff]">Verify Code</span>
                            </div>
                          </n-button>
                        </n-col>
                      </n-row>
  
                      <!-- Resend Code -->
                      <p class="text-center mt-4">
                        Didn't receive the code?
                        <n-button text type="primary" @click="resendCode" :disabled="countdown > 0">Resend</n-button>
                      </p>
                    </div>
  
                    <!-- Step 3: Update Password -->
                    <div v-if="step === 3">
                      <n-form-item path="newPassword" label="New Password">
                        <n-input size="large" v-model:value="modelRef.newPassword" type="password" placeholder="Enter new password" />
                      </n-form-item>
  
                      <n-form-item path="confirmPassword" label="Confirm Password">
                        <n-input size="large" v-model:value="modelRef.confirmPassword" type="password" placeholder="Confirm new password" />
                      </n-form-item>
  
                      <n-row :gutter="[0, 2]">
                        <n-col :span="24">
                          <n-button :disabled="isUpdating" size="large" color="#f17315" block @click="updatePassword">
                            <div class="flex items-center gap-4">
                              <n-spin v-if="isUpdating" size="small" stroke="#fff" />
                              <span v-else class="text-[#fff]">Update Password</span>
                            </div>
                          </n-button>
                        </n-col>
                      </n-row>
                    </div>
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
  import { ref, computed } from "vue";
  import { NForm, NFormItem, NInput, NButton, NSpin, NImage, useMessage } from "naive-ui";
  import { sendCode,verifyCode,recoverPassword } from '@/composables/requests/auth'; // Adjust path as needed
  import {useStore } from '@/stores/index'
  import { useNotify } from '@/composables/mixins';


   const pinia = useStore()
   const { notify } = useNotify();
  
  const formRef = ref(null);
  const modelRef = ref({
    email: "",
    code: "",
    newPassword: "",
    confirmPassword: ""
  });
  const rules = {
    email: [{ required: true, message: "Please enter your email", trigger: "blur" }],
    code: [{ required: true, message: "Please enter the verification code", trigger: "blur" }],
    newPassword: [{ required: true, message: "Please enter a new password", trigger: "blur" }],
    confirmPassword: [
      { required: true, message: "Please confirm your password", trigger: "blur" },
      {
        validator: (_, value) => value === modelRef.value.newPassword,
        message: "Passwords do not match",
        trigger: "blur"
      }
    ]
  };
  
  const step = ref(1);
  const isSubmitting = ref(false);
  const isVerifying = ref(false);
  const isUpdating = ref(false);
  const countdown = ref(0);
  let countdownInterval = null;
  
  // Format countdown as MM:SS
  const countdownText = computed(() => {
    const minutes = Math.floor(countdown.value / 60);
    const seconds = countdown.value % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  });
  
  // Function to send verification code
  const sendVerificationCode = async() => {
      try{
        isSubmitting.value = true;
        const payload = {email:modelRef.value.email}
        const data = await sendCode(payload)

        if(data.success){
            
            step.value = 2;
            countdown.value = 300; // 5 minutes
            startCountdown();
            notify('success',"Verification code sent to your email.");
        }else{
            notify('error',data.message); 
        }
        isSubmitting.value = false;

    }catch(e){
         console.log(e)
        isSubmitting.value = false;

    }
  };
  
  // Function to verify the code
  const verify_Code = async() => {
    try{

        isVerifying.value = true;
        const payload = {email:modelRef.value.email,code:modelRef.value.code}
        const data = await verifyCode(payload)
    
        if(data.success){
              isVerifying.value = false;
              step.value = 3;
              notify('success',data.message);
        }else{
            notify('error',data.message); 
        }
    }catch(e){
        console.log(e)
        isVerifying.value = false;
    }
  };
  
  // Function to update password
  const updatePassword = async() => {
    try{

        isUpdating.value = true;
        const payload = {email:modelRef.value.email,newpassword:modelRef.value.confirmPassword}
        const data = await verifyCode(payload)

        if(data.success){

            notify('success',data.message); 
            navigateTo('/account')
        }else{
            notify('error',data.message); 
        }
        isUpdating.value = false;
        //   message.success("Password updated successfully!");
          // Redirect or clear form
    }catch(e){

    }
  };
  
  // Function to start countdown
  const startCountdown = () => {
    clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
      if (countdown.value > 0) {
        countdown.value--;
      } else {
        clearInterval(countdownInterval);
      }
    }, 1000);
  };
  
  // Function to resend verification code
  const resendCode = () => {
    message.info("Resending verification code...");
    countdown.value = 300; // Reset countdown to 5 minutes
    startCountdown();
  };
  </script>
  
  <style scoped>
  /* Add any additional styling here */
  </style>
  