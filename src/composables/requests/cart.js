import { useStore } from "@/stores";

export const getCart = async()=>{

    const pinia = useStore();
    const url = `${baseURL}/cart`;
    const options =  {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${pinia.state.user?.accessToken}`
        },
    };

    return await asyncRequest(url,options);

}

export const addCart = async(payload)=>{

    const pinia = useStore();
    const url = `${baseURL}/cart`;
    const options =  {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${pinia.state.user?.accessToken}`
        },
        body: JSON.stringify(payload)
    };

    return await asyncRequest(url,options);

}

export const removeFromCart = async(productId)=>{

    const pinia = useStore();
    const url = `${baseURL}/cart/${productId}`;
    const options =  {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${pinia.state.user?.accessToken}`
        },
    };

    return await asyncRequest(url,options);

}

export const updateCart = async(productId,payload)=>{

    const pinia = useStore();
    const url = `${baseURL}/cart/${productId}`;
    const options =  {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${pinia.state.user?.accessToken}`
        },
        body: JSON.stringify(payload)
    };

    return await asyncRequest(url,options);
 
}