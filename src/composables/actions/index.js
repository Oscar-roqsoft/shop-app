
import { useStore } from "@/stores";
import { useNotify } from '@/composables/mixins'; // Adjust path as needed


import { getAllProduct } from "@/composables/requests/product"
import { getCategory } from "@/composables/requests/category"
import { addCart,removeFromCart,getCart,updateCart } from "@/composables/requests/cart"

export const { notify } = useNotify();

export const  get_all_product = async (pageNumber) => {
    const pinia = useStore()
    // pinia.state.bulk_tokens_bals.data = []
    pinia.state.isFetchingProduct = true
    try {
      const data = await getAllProduct(pageNumber);
      if (data.success) {
        const result = data.data.products;
        pinia.setProducts(result);
      }
      pinia.state.isFetchingProduct = false
    } catch (e) {
      console.log(e);
      pinia.state.isFetchingProduct = false
    }
};

export const  get_all_categories = async () => {
    const pinia = useStore()
    // pinia.state.bulk_tokens_bals.data = []
    pinia.state.isFetchingCategories = true
    try {
      const data = await getCategory();
      if (data.success) {
        const result = data.data.category;
        pinia.setCategories(result);
      }
      pinia.state.isFetchingCategories = false
    } catch (e) {
      console.log(e);
      pinia.state.isFetchingCategories = false
    }
};


export const  get_all_cart = async () => {
    const pinia = useStore()
    // pinia.state.bulk_tokens_bals.data = []
    pinia.state.isFetchingCart = true
    try {
      const data = await getCart();
      if (data.success) {
        const result = data.data?.transformedCart?.items;
        pinia.setCart(filterDuplicatesById([...result]));
      }
      pinia.state.isFetchingCart = false
    } catch (e) {
      console.log(e);
      pinia.state.isFetchingCart = false
    }
};


export const  add_cart = async (payload) => {
    const pinia = useStore()
    // pinia.state.bulk_tokens_bals.data = []
    pinia.state.isAddingToCart = true
    try {
      const data = await addCart(payload);
      if (data.success) {
      const productToAdd = pinia.state.products.find(p => p._id === payload.productId);
      if (productToAdd) {
        pinia.state.cart.push({product:productToAdd,quantity:1});
      }

      }
      pinia.state.isAddingToCart = false
    } catch (e) {
      console.log(e);
      pinia.state.isAddingToCart = false
    }
};


export const  remove_from_cart = async (productId) => {
    const pinia = useStore()
    // pinia.state.bulk_tokens_bals.data = []
    pinia.state.isRemovingFromCart = true
    try {
      const data = await removeFromCart(productId);
      if (data.success) {
        pinia.state.cart = pinia.state.cart?.filter(item => item.product._id !== productId);
        pinia.state.showDeleteModal = false
      }
      pinia.state.isRemovingFromCart = false
    } catch (e) {
      console.log(e);
      pinia.state.isRemovingFromCart = false
    }
};


export const  update_cart = async (productId,quantity) => {

    const pinia = useStore()
    // pinia.state.bulk_tokens_bals.data = []
    pinia.state.isUpdatingCart = true

    const payload ={
      quantity
    }

    try {
      const data = await updateCart(productId,payload);
      if (data.success) {

        // pinia.state.cart = pinia.state.cart?.filter(item => item.product._id !== productId);

        notify('success','successfully updated')

      }
      pinia.state.isUpdatingCart = false
    } catch (e) {
      console.log(e);
      pinia.state.isUpdatingCart = false
    }

};



