import { useState, useEffect } from "react";
import { fetchGet } from "../http";

export function useFetch(fetchFn) {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(() => true);
                const data = await fetchFn("http://localhost:8000/users");
                setData(data);
                setLoading(() => false);
            } catch(error) {
                console.log(error.message);
                setError(error.message);
            }
        }
        fetchData();
    }, []);

    return {data, error, loading};
}