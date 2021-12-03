import axios from "axios";
import { useState, useEffect } from "react";

export default function useFetch(url) {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState([]);

    async function fetchData() {

        try {

            const { data: responseData } = await axios.get(url);
            setData(responseData);
            setLoading(false)

        } catch (err) {
            setError(err.message)
            setLoading(false)

        }

    }

    useEffect(() => {
        fetchData();
    }, [])



    return { data, loading, error };

}