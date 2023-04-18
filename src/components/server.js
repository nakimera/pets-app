import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = "https://634e71874af5fdff3a5c61ba.mockapi.io/api/v1/pets";

export const useFetchItem = (url = API_URL) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(url);
                setData(response.data)
                setSuccess(true)
                setError(null)
            } catch (error) {
                setError(error)
                setSuccess(null)
            }
        })()
    }, [url])

    return { data, error, success };
}
