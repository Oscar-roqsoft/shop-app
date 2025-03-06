<template>
    <div class="min-h-[80vh] pt-[160px] pb-[50px] md:pt-[130px]">
        <div class="md:max-w-[700px] mx-auto w-full h-full px-4 md:px-0">
            
            <n-breadcrumb class="mb-6">
                <n-breadcrumb-item> Home </n-breadcrumb-item>
                <n-breadcrumb-item> Profile </n-breadcrumb-item>
                <n-breadcrumb-item> Edit Profile </n-breadcrumb-item>
            </n-breadcrumb>

            <h1 class="text-3xl font-bold mb-6">Edit Profile</h1>

            <n-form ref="formRef" :model="formData" :rules="rules">
                <n-form-item path="name" label="Full Name">
                    <n-input v-model:value="formData.name" placeholder="Enter your full name" size="large" round />
                </n-form-item>

                <n-form-item path="email" label="Email">
                    <n-input v-model:value="formData.email" placeholder="Enter your email" size="large" type="email" round />
                </n-form-item>

                <n-form-item path="phone" label="Phone Number">
                    <n-input v-model:value="formData.phone" placeholder="Enter your phone number" size="large" type="tel" round />
                </n-form-item>

                <n-form-item path="country" label="Country">
                    <n-select
                        v-model:value="formData.country"
                        :options="countries"
                        placeholder="Select your country"
                        size="large"
                        round
                    />
                </n-form-item>

                <n-form-item path="address" label="Address">
                    <n-input v-model:value="formData.address" placeholder="Enter your address" size="large" round />
                </n-form-item>

                <n-form-item path="password" label="New Password">
                    <n-input v-model:value="formData.password" size="large" type="password" placeholder="Enter new password" round />
                </n-form-item>

                <n-form-item path="confirmPassword" label="Confirm Password">
                    <n-input v-model:value="formData.confirmPassword" size="large" type="password" placeholder="Confirm new password" round />
                </n-form-item>

                <n-checkbox  color="#f17315" v-model:checked="formData.saveInfo">
                    Save this information for future use
                </n-checkbox>

                <n-button round color="#f17315" block size="large" class="mt-4" @click="updateProfile">
                    Save Changes
                </n-button>
            </n-form>

            <div v-if="successMessage" class="mt-4 text-green-600">
                {{ successMessage }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { NBreadcrumb, NBreadcrumbItem, NForm, NFormItem, NInput, NSelect, NButton, NCheckbox } from 'naive-ui';

// Mocked User Profile Data
const formData = ref({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1234567890',
    country: 'Nigeria', // Default selected country
    address: '123 Main Street, City, Country',
    password: '',
    confirmPassword: '',
    saveInfo: false
});

// Country List
const countries = ref([
    { label: 'United States', value: 'United States' },
    { label: 'United Kingdom', value: 'United Kingdom' },
    { label: 'Canada', value: 'Canada' },
    { label: 'Nigeria', value: 'Nigeria' },
    { label: 'Ghana', value: 'Ghana' },
    { label: 'South Africa', value: 'South Africa' },
    { label: 'India', value: 'India' },
    { label: 'Germany', value: 'Germany' },
    { label: 'France', value: 'France' },
]);

const successMessage = ref('');

const updateProfile = () => {
    if (formData.value.password && formData.value.password !== formData.value.confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    
    // TODO: Replace with API request
    console.log("Updated Profile Data:", formData.value);

    successMessage.value = "Profile updated successfully!";
};
</script>
