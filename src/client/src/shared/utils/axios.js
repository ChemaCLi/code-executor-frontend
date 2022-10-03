import axiosFetcher from "axios"

export const axios = axiosFetcher.create({
  baseURL: process.env.NEXT_PUBLIC_REST_API_URL,
  headers: { Authorization: "sample token" }
})
