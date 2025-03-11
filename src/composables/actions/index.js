
import { useStore } from "@/stores";


import { getAllProduct } from "@/composables/requests/product"

export const  get_all_product = async (pageNumber) => {
    const pinia = useStore()
    // pinia.state.bulk_tokens_bals.data = []
    try {
      const data = await getAllProduct(pageNumber);
      if (data.success) {
        const result = data.data;
        pinia.setProducts(result);
      }
    //   pinia.state.isFetchingBalances = false
    } catch (e) {
      console.log(e);
    //   pinia.state.isFetchingBalances = false
    }
};