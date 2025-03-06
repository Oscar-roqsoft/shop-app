<template>
    <div class=" min-h-[90vh] pb-24 pt-[150px] md:pb-[130px] md:max-w-[1200px] mx-auto w-full h-full px-4  md:px-0 ">

        <div class=" flex justify-center items-center  h-full mx-[16px_!important] md:mx-0">
                <div class="flex items-center  overflow-hidden  border-[#e2e2e2] h-full md:h-[680px]   w-full rounded-3xl">
    
                    <div class="md:w-[60%] hidden md:block ">
    
                        <n-image
                            width="100%"
                            class=""
                            src="/product/phone.png"
                        />
    
                    </div>

                    <div class="md:w-[40%] w-[100%] md:overflow-auto flex h-full  justify-center md:px-[30px_!important] py-6 md:py-[14_!important]">
    
                        <div class="w-full h-[inherit]  rounded-2xl md:px-[14px_!important] pb-[14px_!important]">
                            <!-- <h4 class="text-[32px] font-bold mb-[16px_!important] font-stretch-extra-expanded">
                                Motor<span class="text-[#1aa058]">Parts</span></h4> -->
    
                            <h2 class="text-[24px]">Sign Up</h2>
    
                            <p class="mb-[16px_!important]">Already have an account? <a href="/account" class="text-[#1aa058]">Sign In</a></p>
    
                            <div class="flex items-center py-8 justify-center">
    
                                <div class="w-full max-w-md  rounded-lg">
        
                                    <n-form ref="formRef" :model="modelRef" :rules="rules">
                                        <n-form-item path="fullName" label="Full Name">
                                            <n-input size="large" round v-model:value="modelRef.fullName" placeholder="Enter full name" @keydown.enter.prevent />
                                        </n-form-item>
                                    
                                        <n-form-item path="username" label="Username">
                                            <n-input size="large" round v-model:value="modelRef.username" placeholder="Choose a username" @keydown.enter.prevent />
                                        </n-form-item>
                                    
                                        <n-form-item path="email" label="Email">
                                            <n-input size="large" round v-model:value="modelRef.email" placeholder="Enter email" type="email" @keydown.enter.prevent />
                                        </n-form-item>
                                    
                                        <n-form-item path="country" label="Country">
                                            <client-only>
                                            <n-select
                                            size="large"
                                            round
                                            v-model:value="modelRef.country"
                                            :options="countryOptions"
                                            :render-label="renderLabel"
                                            :render-tag="renderSingleSelectTag"
                                            filterable
                                            placeholder="Select your country"
                                            />
                                        </client-only>
                                        </n-form-item>
                                    
                                        <n-form-item path="password" label="Password">
                                            <n-input size="large" round v-model:value="modelRef.password" type="password" placeholder="Enter password" @keydown.enter.prevent />
                                        </n-form-item>
                                    
                                        <n-form-item ref="rPasswordFormItemRef" path="reenteredPassword" label="Re-enter Password">
                                            <n-input size="large" round v-model:value="modelRef.reenteredPassword" :disabled="!modelRef.password" type="password" placeholder="Confirm password" @keydown.enter.prevent />
                                        </n-form-item>
                                    
                                        <n-row :gutter="[0, 2]">
                                            <n-col :span="24" style=" width: 100% !important;">
                                            <div style=" width: 100% !important; margin-top: 16px !important;">
                                                <n-button style=" width: 100% !important;" size="large"  round type="primary" @click="handleValidateButtonClick">
                                                Register
                                                </n-button>
                                            </div>
                                            </n-col>
                                        </n-row>


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
import { ref, h } from "vue";
import { NAvatar, NForm, NFormItem, NInput, NButton, NSelect,NCol,NRow,NImage } from "naive-ui";

const formRef = ref(null);
const rPasswordFormItemRef = ref(null);

const modelRef = ref({
  fullName: "",
  username: "",
  email: "",
  country: null,
  password: "",
  reenteredPassword: ""
});

// Country options with flags
const countryOptions = ref([
  { label: "Nigeria", value: "Nigeria", flag: "🇳🇬" },
  { label: "Ghana", value: "Ghana", flag: "🇬🇭" },
  { label: "South Africa", value: "South Africa", flag: "🇿🇦" },
  { label: "Kenya", value: "Kenya", flag: "🇰🇪" },
  { label: "United States", value: "United States", flag: "🇺🇸" },
  { label: "United Kingdom", value: "United Kingdom", flag: "🇬🇧" },
  { label: "Canada", value: "Canada", flag: "🇨🇦" },
  { label: "Germany", value: "Germany", flag: "🇩🇪" },
  { label: "France", value: "France", flag: "🇫🇷" },
  { label: "India", value: "India", flag: "🇮🇳" }
]);

// Render function for dropdown options (with flag)
const renderLabel = (option) => {
  return h(
    "div",
    { style: { display: "flex", alignItems: "center", gap: "10px" } },
    [
      h(NAvatar, {
        round: true,
        size: "small",
        src: `https://flagcdn.com/w40/${option.value.toLowerCase().slice(0, 2)}.png` // Dynamic flag URL
      }),
      h("span", null, option.label)
    ]
  );
};

// Render function for selected item (single select)
const renderSingleSelectTag = ({ option }) => {
  return h(
    "div",
    { style: { display: "flex", alignItems: "center", gap: "10px" } },
    [
      h(NAvatar, {
        round: true,
        size: 24,
        src: `https://flagcdn.com/w40/${option.value.toLowerCase().slice(0, 2)}.png`
      }),
      h("span", null, option.label)
    ]
  );
};

// Validation rules
const rules = {
  fullName: [{ required: true, message: "Full Name is required", trigger: ["input", "blur"] }],
  username: [{ required: true, message: "Username is required", trigger: ["input", "blur"] }],
  email: [
    { required: true, message: "Email is required", trigger: ["input", "blur"] },
    { type: "email", message: "Invalid email format", trigger: ["input", "blur"] }
  ],
  country: [{ required: true, message: "Country selection is required", trigger: ["change"] }],
  password: [{ required: true, message: "Password is required", trigger: ["input", "blur"] }],
  reenteredPassword: [
    { required: true, message: "Re-entered password is required", trigger: ["input", "blur"] },
    {
      validator: (rule, value) => value === modelRef.value.password,
      message: "Passwords do not match!",
      trigger: ["blur", "password-input"]
    }
  ]
};

const handleValidateButtonClick = () => {
  formRef.value?.validate((errors) => {
    if (!errors) {
      alert("Registration successful!");
    }
  });
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
