
import { useStore } from "@/stores";


import { getAllProduct } from "@/composables/requests/product"

export const  get_all_product = async (pageNumber) => {
    const pinia = useStore()
    // pinia.state.bulk_tokens_bals.data = []
    pinia.state.isFetchingProduct = true
    try {
      const data = await getAllProduct(pageNumber);
      if (data.success) {
        const result = data.data;
        pinia.setProducts(result);
      }
      pinia.state.isFetchingProduct = false
    } catch (e) {
      console.log(e);
      pinia.state.isFetchingProduct = false
    }
};