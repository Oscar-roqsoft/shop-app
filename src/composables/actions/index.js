
import { useStore } from "@/stores";


import { getAllProduct } from "@/composables/requests/product"
import { getCategory } from "@/composables/requests/category"

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

