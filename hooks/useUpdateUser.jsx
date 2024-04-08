import axios from 'axios'
import { useState } from 'react'


export const useUpdateUser = async (id,body) => {
    const [isUpdateLoading,setIsisUpdateLoading] = useState(false)
    const [isUpdateError,setIsUpdateError] = useState(null)
    
    try {
        setIsLoading(true)
        const response = await axios.get('/auth/update/'+id, body);
        setData(response.data)
        setIsLoading(false)
        return response.data;
    } catch (error) {
        setIsLoading(false)
        if (!error.response) {
            console.error('Error:', error.message);
            return; // Mengembalikan nilai kosong atau melakukan sesuatu yang sesuai dengan kasus penggunaan Anda
        }
        
        const { status, data } = error.response;
        setIsError(data.error)
          console.error('Status:', status);
          console.error('Error:', data.error);
    }

    return {data,isLoading,isError}
}