import { useStore } from "@/stores";

export const getAllProduct = async(pageNumber)=>{
    const pinia = useStore();
    const url = `${baseURL}/product/all/${pageNumber}`;
    const options =  {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${pinia.state.user?.accessToken}`
        },
    };
    return await asyncRequest(url,options);

}