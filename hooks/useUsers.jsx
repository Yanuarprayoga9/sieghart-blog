import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

export const useGetUser = () => {
    const fetchApi = async () => {
        const res = await axios.get('/auth/me');
        console.log(res.data)
        return res.data

    }

    

}
