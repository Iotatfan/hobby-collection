import axios from "axios"
import env from "../config/env"

const http = axios.create({
    baseURL: env.apiBaseUrl,
})

http.interceptors.request.use((config) => {
    const token = env.apiJwt || localStorage.getItem("jwt")

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

export default http
