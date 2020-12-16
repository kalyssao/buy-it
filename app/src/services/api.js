import axios from 'axios'
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || "https://kalyssa-buy-it.herokuapp.com"

export const api_service = axios.create({
    baseURL: API_ENDPOINT,
    headers: {'Accept': 'application/json'}
})

