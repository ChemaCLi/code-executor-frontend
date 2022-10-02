import axios from "axios"

export const axiosConnector = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REST_API_URL
});
