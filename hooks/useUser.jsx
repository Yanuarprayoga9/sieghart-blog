import axios from 'axios'
import { useEffect, useState } from 'react'

export const useUsers = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})

    const fetchApi = async () => {
        try {
            setLoading(true)
            const res = await axios.get('/auth/me');
            setData(res.data)
        } catch (error) {
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchApi();
    }, [])
    return [loading, data]
}

