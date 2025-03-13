<template>
    <div class="min-h-[80vh] pt-[160px] pb-[50px] md:pt-[130px]">
      <div class="md:max-w-[1200px] mx-auto w-full h-full px-4 md:px-0">
        <!-- Breadcrumb -->
        <n-breadcrumb class="mb-[24px]">
          <n-breadcrumb-item> Home </n-breadcrumb-item>
          <n-breadcrumb-item> Orders </n-breadcrumb-item>
        </n-breadcrumb>
  
        <!-- Page Title -->
        <h1 class="text-3xl font-bold mb-6">My Orders</h1>
  
        <!-- Scrollable Table Container -->
        <div class="overflow-x-auto">
          <n-table :bordered="true" size="large" class="min-w-[1000px] md:min-w-full">
            <thead>
              <tr>
                <th style="width: 15%;">Order ID</th>
                <th style="width: 15%;">Items</th>
                <th style="width: 10%;">Status</th>
                <th style="width: 10%;">Total Amount</th>
                <th style="width: 15%;">Delivery Date</th>
                <th style="width: 15%;">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in orders" :key="order.id">
                <td>#{{ order.id }}</td>
                <td>
                  <ul>
                    <li v-for="item in order.items" :key="item.id">
                      {{ item.name }} (x{{ item.quantity }})
                    </li>
                  </ul>
                </td>
                <td>
                  <n-tag :type="getStatusTagType(order.status)">
                    {{ order.status }}
                  </n-tag>
                </td>
                <td>€{{ order.total.toFixed(2) }}</td>
                <td>{{ order.estimatedDelivery }}</td>
                <td>
                  <n-button
                    round
                    type="primary"
                    size="small"
                    @click="viewOrderDetails(order.id)"
                  >
                    <!-- View Icon -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 6.5a9.77 9.77 0 0 1 8.82 5.5c-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12A9.77 9.77 0 0 1 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5m0 5a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 1 0-5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5s4.5-2.02 4.5-4.5s-2.02-4.5-4.5-4.5"
                      />
                    </svg>
                  </n-button>
                  <n-button
                    class="ml-2"
                    round
                    type="error"
                    size="small"
                    @click="confirmDelete(order.id)"
                  >
                    <!-- Delete Icon -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"
                      />
                    </svg>
                  </n-button>
                </td>
              </tr>
            </tbody>
          </n-table>
        </div>
      </div>
  
      <!-- Delete Confirmation Modal -->
      <n-modal v-model:show="showDeleteModal">
        <n-card
          title="Confirm Deletion"
          closable
          @close="showDeleteModal = false"
          style="width: 400px; max-width: 90vw"
        >
          <p class="mb-4">Are you sure you want to cancel the order?</p>
          <n-space justify="end">
            <n-button @click="showDeleteModal = false">Cancel</n-button>
            <n-button type="error" @click="cancelOrder">Delete</n-button>
          </n-space>
        </n-card>
      </n-modal>
    </div>

    <MainFooter/>
  </template>
  
<script setup>
import { ref } from 'vue';
import { NBreadcrumb, NBreadcrumbItem, NTable, NButton, NTag,NModal,NCard,NSpace } from 'naive-ui';

// Sample Order Data
const orders = ref([
    {
        id: 1001,
        items: [
            { id: 1, name: 'Cotton T-shirt', quantity: 2 },
            { id: 2, name: 'Jeans', quantity: 1 }
        ],
        status: 'Processing',
        total: 99.99,
        estimatedDelivery: 'March 10, 2025'
    },
    {
        id: 1002,
        items: [
            { id: 3, name: 'Sneakers', quantity: 1 }
        ],
        status: 'Shipped',
        total: 119.99,
        estimatedDelivery: 'March 12, 2025'
    },
    {
        id: 1003,
        items: [
            { id: 4, name: 'Jacket', quantity: 1 },
            { id: 5, name: 'Hat', quantity: 2 }
        ],
        status: 'Delivered',
        total: 149.50,
        estimatedDelivery: 'March 5, 2025'
    },
    {
        id: 1004,
        items: [
            { id: 6, name: 'Backpack', quantity: 1 }
        ],
        status: 'Cancelled',
        total: 79.99,
        estimatedDelivery: 'N/A'
    }
]);


const showDeleteModal = ref(false);
const itemToDelete = ref(null);

const cancelOrder = () => {
    const order = orders.value.find(o => o.id === itemToDelete);
    if (order && order.status !== 'Delivered') {
        order.status = 'Cancelled';
        alert(`Order #${itemToDelete} has been cancelled.`);
    }
}
  const confirmDelete = (item) => {
    itemToDelete.value = item;
    showDeleteModal.value = true;
  };
  


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

// Function to handle viewing order details
const viewOrderDetails = (orderId) => {
    navigateTo(`/order/${orderId}`);
    // You can navigate to an order details page using Vue Router
};
</script>

<style scoped>
/* Custom Styles */
</style>


<!-- 
<n-button v-if="order.status !== 'Delivered'" type="error" @click="cancelOrder(order.id)">
    //     Cancel Order
    // </n-button>  -->