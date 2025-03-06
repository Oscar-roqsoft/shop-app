<template>
    <div class="min-h-[80vh] pt-[160px] pb-[50px] md:pt-[130px]">
        <div class="md:max-w-[1200px] mx-auto w-full h-full px-4 md:px-0">
            <!-- Breadcrumb -->
            <n-breadcrumb class="mb-[24px]">
                <n-breadcrumb-item> Home </n-breadcrumb-item>
                <n-breadcrumb-item> Cart </n-breadcrumb-item>
                <n-breadcrumb-item> Checkout </n-breadcrumb-item>
            </n-breadcrumb>

            <!-- Billing Details Section -->
            <div class="mt-[50px]">
                <h1 class="text-3xl font-bold">Billing Details</h1>

                <div class="grid grid-cols-1 md:grid-cols-2 mt-6 gap-4 md:gap-20">
                    <div>
                        <n-form ref="formRef" :model="formData" :rules="rules">
                            <n-form-item label="Full Name" path="fullName">
                                <n-input v-model:value="formData.fullName" placeholder="Enter your full name" size="large" round />
                            </n-form-item>

                            <n-form-item label="Email" path="email">
                                <n-input v-model:value="formData.email" type="email" placeholder="Enter your email" size="large" round />
                            </n-form-item>

                            <n-form-item label="Street Address" path="streetAddress">
                                <n-input v-model:value="formData.streetAddress" placeholder="Enter your street address" size="large" round />
                            </n-form-item>

                            <n-form-item label="City" path="city">
                                <n-input v-model:value="formData.city" placeholder="Enter your city" size="large" round />
                            </n-form-item>

                            <n-form-item label="Phone Number" path="phoneNumber">
                                <n-input-number v-model:value="formData.phoneNumber" placeholder="Enter your phone number" size="large" round class="w-full" />
                            </n-form-item>

                            <n-form-item label="Zip Code" path="zipCode">
                                <n-input v-model:value="formData.zipCode" placeholder="Enter your zip code" size="large" round />
                            </n-form-item>

                            <n-checkbox v-model:checked="saveDetails">
                                Save this information for faster check-out next time
                            </n-checkbox>
                        </n-form>
                    </div>

                    <!-- Order Summary -->
                    <div>
                        <n-card title="Order Summary" style="border-radius: 10px;">
                            <div v-for="item in items" :key="item.id" class="flex justify-between mb-2">
                                <span>{{ item.name }} (x{{ item.quantity }})</span>
                                <span>€{{ (item.price * item.quantity).toFixed(2) }}</span>
                            </div>
                            <hr class="my-4" />
                            <div class="flex justify-between text-lg">
                                <span>Subtotal:</span>
                                <span>€{{ totalPrice.toFixed(2) }}</span>
                            </div>
                            <hr class="my-4" />
                            <div class="flex justify-between text-lg">
                                <span>Delivery Fee:</span>
                                <span>free</span>
                            </div>
                            <hr class="my-4" />
                            <div class="flex justify-between text-lg font-bold">
                                <span>Total:</span>
                                <span>€{{ totalPrice.toFixed(2) }}</span>
                            </div>


                            <div class="flex flex-col">
                                <div class="py-4 flex justify-between items-center">
                                    <n-checkbox v-model:checked="bankCheckout">
                                        Bank
                                    </n-checkbox>
                                    <n-image
                                        width="100"
                                        src="/bank/visa.png"
                                    />
                                </div>

                                <n-checkbox v-model:checked="cashCheckout">
                                    Cash on delivery
                                </n-checkbox>

                                <n-button round class="mt-4" size="large" color="#f17315" style="width: 200px;">
                                     Place order
                                 </n-button>

                            </div>
                        </n-card>
                    </div>
                </div>

                <!-- Checkout Button -->
                <!-- <div class="mt-6">
                    <n-button type="primary" size="large" block @click="handleCheckout">Proceed to Checkout</n-button>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
// import { NCard,  NInputNumber, NBreadcrumb,NBreadcrumbItem,NIcon,NImage,NRate,NButton,NFormItemGi,NInputNumber,NForm, NFormItem, NInput,NCheckbox } from 'naive-ui';

import {
    NBreadcrumb,
    NBreadcrumbItem,
    NForm,
    NFormItem,
    NInput,
    NInputNumber,
    NCheckbox,
    NButton,
    NCard,
    NImage
} from 'naive-ui';

const formRef = ref(null);

const bankCheckout = ref(false)
const cashCheckout = ref(false)

const formData = ref({
    fullName: '',
    email: '',
    streetAddress: '',
    city: '',
    phoneNumber: null,
    zipCode: ''
});

const saveDetails = ref(false);

const rules = {
    fullName: [{ required: true, message: 'Full Name is required', trigger: 'blur' }],
    email: [{ required: true, message: 'Email is required', trigger: 'blur' }],
    streetAddress: [{ required: true, message: 'Street Address is required', trigger: 'blur' }],
    city: [{ required: true, message: 'City is required', trigger: 'blur' }],
    phoneNumber: [{ required: true, message: 'Phone Number is required', trigger: 'blur' }],
    zipCode: [{ required: true, message: 'Zip Code is required', trigger: 'blur' }]
};

const items = ref([
    { id: 1, name: 'Cotton T-shirt', price: 44, quantity: 1 },
    { id: 2, name: 'Jeans', price: 55, quantity: 1 },
    { id: 3, name: 'Sneakers', price: 99, quantity: 1 }
]);

const totalPrice = computed(() =>
    items.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
);

const handleCheckout = () => {
    formRef.value?.validate((errors) => {
        if (!errors) {
            console.log('Checkout data:', formData.value);
            alert('Order has been placed successfully!');
        } else {
            alert('Please fill in all required fields.');
        }
    });
};
</script>

<style scoped>
/* Custom styles */
</style>


<!-- import { NBreadcrumb,NBreadcrumbItem,NIcon,NImage,NRate,NButton,NFormItemGi,NInputNumber,NForm, NFormItem, NInput,NCheckbox } from 'naive-ui' -->
