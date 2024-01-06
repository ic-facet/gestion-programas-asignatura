import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:8000'
export const TOKEN_KEY = 'token'

export const client = axios.create({
  baseURL: BASE_URL
})

client.interceptors.response.use((response) => {
  if (response.data) {
    response.data
  }

  return response
})

client.interceptors.request.use((config) => {
  // TODO: Conviene localstorage o usar cookies?
  const token = localStorage.getItem(TOKEN_KEY)
  if (token) {
    config.headers['Authorization'] = `Token ${token}`
  }

  return config
})
