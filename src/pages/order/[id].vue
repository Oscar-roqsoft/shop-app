<template>
    <div class="min-h-[80vh] pt-[160px] pb-[50px] md:pt-[130px]">
        <div class="md:max-w-[800px] mx-auto w-full h-full px-4 md:px-0">
            <!-- Breadcrumb -->
            <n-breadcrumb class="mb-[24px]">
                <n-breadcrumb-item> Home </n-breadcrumb-item>
                <n-breadcrumb-item> Orders </n-breadcrumb-item>
                <n-breadcrumb-item> Order #{{ order?.id }} </n-breadcrumb-item>
            </n-breadcrumb>

            <!-- Order Details Header -->
            <div class="bg-white p-6 rounded-lg shadow">
                <h1 class="text-2xl font-bold mb-4">Order Details</h1>

                <p class="text-gray-600">Order ID: <span class="font-medium">#{{ order?.id }}</span></p>
                <p class="text-gray-600">Date Placed: <span class="font-medium">{{ order?.datePlaced }}</span></p>
                <p class="text-gray-600">Estimated Delivery: <span class="font-medium">{{ order?.estimatedDelivery }}</span></p>

                <div class="mt-4">
                    <n-tag :type="getStatusTagType(order?.status)">
                        {{ order?.status }}
                    </n-tag>
                </div>
            </div>

            <!-- Order Items List -->
            <div class="bg-white p-6 rounded-lg shadow mt-6">
                <h2 class="text-xl font-bold mb-4">Items Ordered</h2>

                <div v-for="item in order?.items" :key="item?.id" class="flex justify-between border-b py-3">
                    <div>
                        <p class="font-medium">{{ item?.name }}</p>
                        <p class="text-gray-500">Quantity: {{ item?.quantity }}</p>
                    </div>
                    <p class="font-medium">€{{ item?.price.toFixed(2) }}</p>
                </div>

                <!-- Total Price -->
                <div class="mt-4 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>€{{ order?.total.toFixed(2) }}</span>
                </div>
            </div>

            <!-- Shipping Details -->
            <div class="bg-white p-6 rounded-lg shadow mt-6">
                <h2 class="text-xl font-bold mb-4">Shipping Information</h2>
                <p><strong>Recipient:</strong> {{ order?.shipping.recipient }}</p>
                <p><strong>Address:</strong> {{ order?.shipping.address }}</p>
                <p><strong>Phone:</strong> {{ order?.shipping.phone }}</p>
            </div>

            <!-- Back Button -->
            <div class="mt-6">
                <n-button type="primary" @click="goBack">
                    Back to Orders
                </n-button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { NBreadcrumb, NBreadcrumbItem, NTag, NButton } from 'naive-ui';

const route = useRoute();
const router = useRouter();
const orderId = route.params.id; // Get order ID from URL

// Simulated Order Data (Replace with API call)
const ordersData = [
    {
        id: 1001,
        datePlaced: 'March 1, 2025',
        estimatedDelivery: 'March 10, 2025',
        status: 'Processing',
        total: 99.99,
        items: [
            { id: 1, name: 'Cotton T-shirt', quantity: 2, price: 29.99 },
            { id: 2, name: 'Jeans', quantity: 1, price: 39.99 }
        ],
        shipping: {
            recipient: 'John Doe',
            address: '123 Main Street, Lagos, Nigeria',
            phone: '+234 803 123 4567'
        }
    },
    {
        id: 1002,
        datePlaced: 'March 3, 2025',
        estimatedDelivery: 'March 12, 2025',
        status: 'Shipped',
        total: 119.99,
        items: [
            { id: 3, name: 'Sneakers', quantity: 1, price: 119.99 }
        ],
        shipping: {
            recipient: 'Jane Smith',
            address: '456 Victoria Island, Lagos, Nigeria',
            phone: '+234 805 987 6543'
        }
    }
];

// Find the order by ID
const order = ref(null);
onMounted(() => {
    order.value = ordersData.find(o => o.id == orderId);
});

// Function to assign tag color based on status
const getStatusTagType = (status) => {
    switch (status) {
        case 'Pending':
            return 'warning';
        case 'Processing':
            return 'info';
        case 'Shipped':
            return 'primary';
        case 'Delivered':
            return 'success';
        case 'Cancelled':
            return 'error';
        default:
            return 'default';
    }
};

// Navigate back to orders list
const goBack = () => {
    router.push('/order');
};
</script>

<style scoped>
/* Add any necessary styles */
</style>
