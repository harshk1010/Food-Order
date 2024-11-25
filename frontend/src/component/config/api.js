import axios from "axios"

export const API_URL = "http://localhost:5454";

export const api=axios.create({
    baseURL:API_URL,
    headers:{
        "Content-Type":"application/json",
    }
});

// api.interceptors.request.use((config) => {
//     const token = localStorage.getItem("token"); // Or another method to retrieve your JWT
//     if (token) {
//         config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
// }, (error) => {
//     return Promise.reject(error);
// });