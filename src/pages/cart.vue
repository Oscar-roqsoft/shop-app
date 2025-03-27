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
                  <h4><b>Shopping Cart ({{ pinia.state.cart.length }})</b></h4>
                </n-flex>
              </div>
  
              <!-- Scrollable Table for Cart Items -->
              <div class="w-full overflow-x-auto">
                <n-table :bordered="false" class="md:min-w-[600px] min-w-[700px]">
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
                    <tr v-for="item in pinia.state.cart" :key="item.product?._id">
                      <td class="product-info">
                        <n-image :src="item.product?.images" width="50" height="50" />
                        <div>
                          <div class="text-muted">{{ item?.product?.category }}</div>
                          <div>{{ item.product?.name }}</div>
                        </div>
                      </td>
                      <td>{{ item.product?.price?.toFixed(2) }}</td>
                      <td>
                        <n-space>
                          <n-button size="small" @click="decreaseQuantity(item)">-</n-button>
                          <span class="border px-2">{{ item?.quantity }}</span>
                          <n-button size="small" @click="increaseQuantity(item)">+</n-button>
                        </n-space>
                      </td>
                      <td>{{ (item.product?.price * item?.quantity).toFixed(2) }}</td>
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
      <n-modal v-model:show="pinia.state.showDeleteModal">
        <n-card
          title="Confirm Deletion"
          closable
          @close="showDeleteModal = false"
          style="width: 400px; max-width: 90vw"
        >
          <p class="mb-8">Are you sure you want to remove <b>{{ itemToDelete?.name }}</b> from the cart?</p>
          <n-space justify="end">
            <n-button @click="pinia.state.showDeleteModal = false">Cancel</n-button>
            <n-button type="error" @click="removeItem">
              <span class="mr-1">
               Delete
              </span>
              <n-spin v-if="pinia.state.isRemovingFromCart" size="20px" stroke="#fff"  style="stroke: 10px !important"/>
            </n-button>
          </n-space>
        </n-card>
      </n-modal>
    </div>

    <MainFooter/>
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
    NDivider,
    NSpin
  } from 'naive-ui';

  import { useStore } from '@/stores';

  import { add_cart,remove_from_cart } from '@/composables/actions';
  
  const pinia = useStore();
  
  const items = ref([
    { id: 1, name: 'Cotton T-shirt', category: 'Shirt', price: 44, quantity: 1, image: 'https://i.imgur.com/1GrakTl.jpg' },
    { id: 2, name: 'Jeans', category: 'Pants', price: 55, quantity: 1, image: 'https://i.imgur.com/ba3tvGm.jpg' },
    { id: 3, name: 'Sneakers', category: 'Shoes', price: 99, quantity: 1, image: 'https://i.imgur.com/pHQ3xT3.jpg' }
  ]);
  
  const totalPrice = computed(() => pinia.state.cart.reduce((sum, item) => sum + item.product?.price * item.quantity, 0));
  
  const increaseQuantity = (item) => item.quantity++;
  const decreaseQuantity = (item) => item.quantity > 1 ? item.quantity-- : confirmDelete(item);
  
  const showDeleteModal = ref(pinia.state.showDeleteModal);
  const itemToDelete = ref(null);
  

  const confirmDelete = (item) => {
    itemToDelete.value = item;
    pinia.state.showDeleteModal = true;
  };
  

  const removeItem = () => {
    remove_from_cart(itemToDelete.value.product._id)
    if(!pinia.state.isRemovingFromCart){
      pinia.state.cart.filter(i => i.product._id !== itemToDelete.value.product._id);
      pinia.state.showDeleteModal = false;
      itemToDelete.value = null;
    }
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