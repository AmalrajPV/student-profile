import axios from "axios";

let authToken = localStorage.getItem("access_token");

const axiosInstance = axios.create(
    {
        headers:{Authorization: `Bearer ${authToken}`}
    }
);

export default axiosInstance;