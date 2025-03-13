import { useStore } from "@/stores";

export const getCategory = async()=>{
    
    const pinia = useStore();
    const url = `${baseURL}/category/all`;
    const options =  {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': `${pinia.state.user?.accessToken}`
        },
    };

    return await asyncRequest(url,options);

}