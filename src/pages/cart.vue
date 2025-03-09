<template>
    <div class="min-h-[80vh] pt-[160px] pb-[50px] md:pt-[130px]">
      <div class="md:max-w-[1200px] mx-auto w-full h-full px-4 md:px-0 text-white">
        <n-breadcrumb class="mb-[24px]">
          <n-breadcrumb-item> Home </n-breadcrumb-item>
          <n-breadcrumb-item> Cart </n-breadcrumb-item>
        </n-breadcrumb>
  
        <div class="cart-container mt-6">
          <n-card class="sh shadow-sm" style="border-radius: 10px;">
            <div class="w-full">
              <div class="title mb-4">
                <n-flex justify="space-between">
                  <h4><b>Shopping Cart ({{ items.length }})</b></h4>
                </n-flex>
              </div>
  
              <!-- Scrollable Table for Cart Items -->
              <div class="w-full overflow-x-auto">
                <n-table :bordered="false" class="min-w-[600px]">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price (€)</th>
                      <th>Quantity</th>
                      <th>Subtotal (€)</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in items" :key="item.id">
                      <td class="product-info">
                        <n-image :src="item.image" width="50" height="50" />
                        <div>
                          <div class="text-muted">{{ item.category }}</div>
                          <div>{{ item.name }}</div>
                        </div>
                      </td>
                      <td>{{ item.price.toFixed(2) }}</td>
                      <td>
                        <n-space>
                          <n-button size="small" @click="decreaseQuantity(item)">-</n-button>
                          <span class="border px-2">{{ item.quantity }}</span>
                          <n-button size="small" @click="increaseQuantity(item)">+</n-button>
                        </n-space>
                      </td>
                      <td>{{ (item.price * item.quantity).toFixed(2) }}</td>
                      <td>
                        <n-button  size="small" type="error" @click="confirmDelete(item)">Delete</n-button>
                      </td>
                    </tr>
                  </tbody>
                </n-table>
              </div>

              <div class="flex justify-between items-center">
                <n-button size="large" class="mt-4" type="tertiary" color="#000">Return to Home</n-button>
                <n-button size="large" class="mt-4"  color="#000">Update cart</n-button>
              </div>
  
              <div class="w-full flex md:justify-end mt-6">

                <div class="md:w-[500px]  w-full border-[0.5px] rounded-md">
                    <div class=" p-6">
                        <n-flex justify="space-between">
                               <h4 class=" text-[24px]">Cart Total</h4>
                        </n-flex>
                        <n-divider></n-divider>
                        <n-flex justify="space-between">
                          <span>Subtotal:</span>
                          <span><b>€{{ totalPrice.toFixed(2) }}</b></span>
                        </n-flex>
                        <n-divider></n-divider>
                        <n-flex justify="space-between">
                          <span>Delivery:</span>
                          <span><b>free</b></span>
                        </n-flex>
                        <n-divider></n-divider>
                        <n-flex justify="space-between">
                          <span><b>Total:</b></span>
                          <span><b>€{{ totalPrice.toFixed(2) }}</b></span>
                        </n-flex>
                        <n-button 
                         size="large" class="mt-4" color="#f17315" block @click="checkout">Proceed to Checkout</n-button>
                      </div>
          
                </div>
              </div>
            </div>
          </n-card>
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
          <p>Are you sure you want to remove <b>{{ itemToDelete?.name }}</b> from the cart?</p>
          <n-space justify="end">
            <n-button @click="showDeleteModal = false">Cancel</n-button>
            <n-button type="error" @click="removeItem">Delete</n-button>
          </n-space>
        </n-card>
      </n-modal>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import {
    NBreadcrumb,
    NBreadcrumbItem,
    NCard,
    NTable,
    NImage,
    NSpace,
    NButton,
    NModal,
    NFlex,
    NDivider
  } from 'naive-ui';
  
  const items = ref([
    { id: 1, name: 'Cotton T-shirt', category: 'Shirt', price: 44, quantity: 1, image: 'https://i.imgur.com/1GrakTl.jpg' },
    { id: 2, name: 'Jeans', category: 'Pants', price: 55, quantity: 1, image: 'https://i.imgur.com/ba3tvGm.jpg' },
    { id: 3, name: 'Sneakers', category: 'Shoes', price: 99, quantity: 1, image: 'https://i.imgur.com/pHQ3xT3.jpg' }
  ]);
  
  const totalPrice = computed(() => items.value.reduce((sum, item) => sum + item.price * item.quantity, 0));
  
  const increaseQuantity = (item) => item.quantity++;
  const decreaseQuantity = (item) => item.quantity > 1 ? item.quantity-- : confirmDelete(item);
  
  const showDeleteModal = ref(false);
  const itemToDelete = ref(null);
  
  const confirmDelete = (item) => {
    itemToDelete.value = item;
    showDeleteModal.value = true;
  };
  
  const removeItem = () => {
    items.value = items.value.filter(i => i.id !== itemToDelete.value.id);
    showDeleteModal.value = false;
    itemToDelete.value = null;
  };
  
  const checkout = () => navigateTo('/checkout');
  </script>
  
  <style scoped>
  .cart-container {
    margin: auto;
  }
  .text-muted {
    color: gray;
  }
  .border {
    border: 1px solid #ccc;
    padding: 2px 8px;
  }
  .summary {
    margin-top: 15px;
    /* border-top: 1px solid rgba(0, 0, 0, 0.1); */
    padding: 10px 0;
    font-weight: bold;
  }
  .product-info {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  /* Optional CSS for scrolling if not using Tailwind */
  @media (max-width: 768px) {
    .table-container {
      overflow-x: auto;
      white-space: nowrap;
    }
    .table-container table {
      min-width: 600px;
    }
  }
  </style>
  

  <!-- <div class=" col-span-1">
    <n-space justify="space-between" class="summary">
      <span>ITEMS {{ items.length }}</span>
      <span>&euro;{{ totalPrice.toFixed(2) }}</span>
    </n-space>
    
    <n-form>
      <n-form-item label="SHIPPING">
        <n-select v-model:value="shipping" :options="shippingOptions" />
      </n-form-item>
      <n-form-item label="GIVE CODE">
        <n-input v-model:value="discountCode" placeholder="Enter your code" />
      </n-form-item>
    </n-form>
    
    <n-space justify="space-between" class="total">
      <span>TOTAL PRICE</span>
      <span>&euro;{{ (totalPrice + shippingCost).toFixed(2) }}</span>
    </n-space>
    
    <n-button type="primary" block @click="checkout">CHECKOUT</n-button>
</div> -->