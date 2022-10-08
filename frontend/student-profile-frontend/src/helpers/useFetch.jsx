import { useEffect, useState } from "react";
import axios from "axios";
// import axiosInstance from "./axiosInstance";

let refresh = false;
axios.interceptors.response.use(res => {
    // axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`
    return res
}, async err =>{
    if (err.response.status === 400 && !refresh) {
        refresh = true;
        const response = await axios.post("/auth/refresh", {
            "refresh_token":localStorage.getItem("refresh_token")
        }, {withCredentials: true});
        if (response.status === 200) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['access_token']}`;
            return axios(err.config);
        }
    }
    refresh = false;
    return err;
})

export const useFetch = (url) =>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(()=>{
        const fetchData = async () =>{
            setLoading(true);
            
            try {
                const res = await axios.get(url);
                    setData(res.data);
                
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        };
        fetchData();
    }, [url]);
    return {data, loading, error};
};