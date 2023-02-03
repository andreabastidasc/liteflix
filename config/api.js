import axios from "axios";

export const api = axios.create({baseURL: process.env.NEXT_PUBLIC_API_URL, timeout: 1500, headers: {'content-type': 'application/json'}, params: {
    api_key: process.env.NEXT_PUBLIC_API_KEY
}});

