<template>
    <div class=" min-h-[80vh] pb-24 pt-[100px] md:pt-[120px] md:pb-[130px] md:max-w-[1200px] mx-auto w-full h-full px-4  md:px-0 ">

        <div class=" flex justify-center items-center  h-full mx-[16px_!important] md:mx-0">
                <div class="flex items-center  overflow-hidden  border-[#e2e2e2] h-full md:h-[580px]   w-full rounded-3xl">
    
                    <div class="md:w-[60%] hidden md:block ">
    
                        <n-image
                            width="100%"
                            class=""
                            src="/bglogin2.jpg"
                        />
    
                    </div>

                    <div class="md:w-[40%] w-[100%]  flex h-full  justify-center md:px-[20px_!important] py-6 md:pt-[2px_!important]">
    
                        <div class="w-full h-[inherit]  rounded-2xl md:px-[14px_!important] ">
                            <!-- <h4 class="text-[32px] font-bold mb-[16px_!important] font-stretch-extra-expanded">
                                Motor<span class="text-[#1aa058]">Parts</span></h4> -->
    
                            <h2 class="text-[20px] font-semibold">Sign Up </h2>
    
                            <!-- <p class="mb-[14px_!important]">Already have an account? <a href="/account" class="text-[#f17315]">Sign In</a></p> -->
    
                            <div class="flex items-center py-4 justify-center">
    
                                <div class="w-full  rounded-lg">
        
                                  <n-form ref="formRef" :model="modelRef" :rules="rules">

                                  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4">

                                        <n-form-item path="fullName" label="Full Name">
                                            <n-input size="large"  v-model:value="modelRef.fullName" placeholder="Enter full name" @keydown.enter.prevent />
                                        </n-form-item>
                                    
                                        <!-- <n-form-item path="username" label="Username">
                                            <n-input size="large"  v-model:value="modelRef.username" placeholder="Choose a username" @keydown.enter.prevent />
                                        </n-form-item> -->
                                    
                                        <n-form-item  path="email" label="Email">
                                            <n-input size="large"  v-model:value="modelRef.email" placeholder="Enter email" type="email" @keydown.enter.prevent />
                                        </n-form-item>
                                    
                                        <n-form-item class=" md:col-span-2" path="country" label="Country">
                                            <client-only>
                                            <n-select
                                            size="large"
                                            
                                            v-model:value="modelRef.country"
                                            :options="countryOptions"
                                            :render-label="renderLabel"
                                            :render-tag="renderSingleSelectTag"
                                            filterable
                                            placeholder="Select your country"
                                            />
                                        </client-only>
                                        </n-form-item>
                                    
                                        <n-form-item class=" md:col-span-2" path="password" label="Password">
                                            <n-input size="large"  v-model:value="modelRef.password" type="password" placeholder="Enter password" @keydown.enter.prevent />
                                        </n-form-item>
                                    
                                        <n-form-item class=" md:col-span-2" ref="rPasswordFormItemRef" path="reenteredPassword" label="Re-enter Password">
                                            <n-input size="large"  v-model:value="modelRef.reenteredPassword" :disabled="!modelRef.password" type="password" placeholder="Confirm password" @keydown.enter.prevent />
                                        </n-form-item>

                                        <n-checkbox color="#f17315"  v-model:value="check" class=" md:col-span-2 custom-checkbox" size="large" label="I agree to all the statements in terms of service" />


                                        <n-row :gutter="[0, 2]">
                                            <n-col :span="24" style=" width: 100% !important;">
                                            <div style=" width: 100% !important; margin-top: 24px !important;">
                                                <n-button :disabled="isAuthenticating" style=" width: 100% !important;" size="large"   color="#f17315" @click="handleValidateButtonClick">
                                                  <div class="flex items-center gap-4">
                                                    <n-spin v-if="isAuthenticating" size="small" stroke="#fff" />
                                                    <span v-else class="text-[#fff]">Register</span>
                                                  </div>
                                                </n-button>
                                            </div>
                                            </n-col>
                                        </n-row>
      
        
                                      
                                        <n-button class="mt-[24px_!important]" ghost type="default" size="large"  block @click="handleLogin">
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

                                        <p class="mt-[24px_!important] md:col-span-2 text-center">Already have an account? <a href="/account" class="text-[#f17315] underline">Sign In</a></p>
                                       <!-- <a href="/account" class="text-[#f17315] mt-[20px_!important] md:col-span-2 text-center underline">Forgot password</a> -->

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
import { ref, h } from "vue";
import { NAvatar, NForm, NFormItem, NInput, NButton, NSelect,NCol,NRow,NImage,NSpin,NCheckbox } from "naive-ui";
import {useStore } from '@/stores/index'
import { useNotify } from '@/composables/mixins'; // Adjust path as needed
import { signUp } from '@/composables/requests/auth'; // Adjust path as needed


const { notify } = useNotify();
const pinia = useStore()

const formRef = ref(null);
const rPasswordFormItemRef = ref(null);

const isAuthenticating = ref(false)
const check = ref(false)

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
  // username: [{ required: true, message: "Username is required", trigger: ["input", "blur"] }],
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
  formRef.value?.validate(async(errors) => {
    if (!errors) {
      isAuthenticating.value = true
        try{
        const payload = {
          name:modelRef.value.fullName,
          email:modelRef.value.email,
          country:modelRef.value.country,
          password: modelRef.value.password,
          role:'user'
        }
        const data = await signUp(payload)
        if(data.success){
          pinia.setUser(data)
          notify('success', 'Successfully logged in')
          navigateTo('/')
        }else{
          notify('error', 'Failed log in')
        }

        isAuthenticating.value = false
        }catch(e){
        console.log(e)
        isAuthenticating.value = false
        }

        modelRef.value = {
        fullName: "",
        username: "",
        email: "",
        country: null,
        password: "",
        reenteredPassword: ""
      };
    }
  });
};



const handleLogin = () => {
    console.log(modelRef.value)
    formRef.value?.validate( async(errors) => {
      if (!errors) {
        
        
      }
    });
  };
</script>


<style>
.custom-checkbox :deep(.n-checkbox__box) {
  border-color: #f17315 !important;
}

.custom-checkbox :deep(.n-checkbox__box:hover) {
  background-color: #f17315 !important;
  border-color: #f17315 !important;
}

.custom-checkbox .n-checkbox.n-checkbox--checked :deep( .n-checkbox-box) {
  background-color: #f17315 !important;
  /* border-color: #f17315 !important; */
}
</style>