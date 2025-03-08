<template>
    <div class="min-h-[80vh] pb-24 pt-[140px] md:pb-[130px] md:max-w-[1200px] mx-auto w-full h-full px-4 md:px-0">
      <div class="flex justify-center items-center h-full mx-[16px_!important] md:mx-0">
        <div class="flex items-center overflow-hidden border-[#e2e2e2] h-full md:h-[580px] w-full rounded-3xl">
          <div class="md:w-[60%] hidden md:block">
            <n-image width="100%" src="/bglogin2.jpg" />
          </div>
  
          <div class="md:w-[40%] w-full flex h-full justify-center md:px-[20px_!important] py-6 md:pt-[2px_!important]">
            <div class="w-full h-[inherit] rounded-2xl md:px-[14px_!important]">
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
                        <n-button
                          :disabled="isSubmitting"
                          size="large"
                          color="#f17315"
                          block
                          @click="sendVerificationCode"
                        >
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
                      <p class="text-sm text-gray-600 mt-2">Code expires in {{ countdown }}s</p>
  
                      <n-row :gutter="[0, 2]">
                        <n-col :span="24">
                          <n-button
                            :disabled="!modelRef.code || isVerifying"
                            size="large"
                            color="#f17315"
                            block
                            @click="verifyCode"
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
  import { NForm, NFormItem, NInput, NButton, NSpin, NImage } from "naive-ui";
  
//   const message = useMessage();
  
  const formRef = ref(null);
  const modelRef = ref({
    email: "",
    code: ""
  });
  const rules = {
    email: [{ required: true, message: "Please enter your email", trigger: "blur" }],
    code: [{ required: true, message: "Please enter the verification code", trigger: "blur" }]
  };
  
  const step = ref(1);
  const isSubmitting = ref(false);
  const isVerifying = ref(false);
  const countdown = ref(0);
  let countdownInterval = null;
  
  // Function to send verification code
  const sendVerificationCode = () => {
    isSubmitting.value = true;
    setTimeout(() => {
      isSubmitting.value = false;
      step.value = 2;
      countdown.value = 300; // 5 minutes
      startCountdown();
    //   message.success("Verification code sent to your email.");
    }, 2000);
  };
  
  // Function to verify the code
  const verifyCode = () => {
    isVerifying.value = true;
    setTimeout(() => {
      isVerifying.value = false;
    //   message.success("Code verified! You can now reset your password.");
      // Redirect to reset password page
    }, 2000);
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
    // message.info("Resending verification code...");
    countdown.value = 300; // Reset countdown to 5 minutes
    startCountdown();
  };
  </script>
  
  <style scoped>
  /* Add any additional styling here */
  </style>
  