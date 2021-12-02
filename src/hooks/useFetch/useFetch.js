import axios from "axios";
import { useState, useEffect } from "react";

export default function useFetch(url) {
    
    const [data, setData] = useState([]);

    async function fetchData() {
        
        const {data : responseData} = await axios.get(url);
            setData(responseData);
        }
        

        useEffect(() => {
            fetchData();
        }, [])

    

    return {data} ;

}