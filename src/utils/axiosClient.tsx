import axios from 'axios'
import { BASE_URL } from '../helpers/env-variables'
export const TOKEN_KEY = 'token'

export const client = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  xsrfHeaderName: 'X-CSRFToken',
  xsrfCookieName: 'csrftoken'
})

client.interceptors.response.use((response) => {
  if (response.data) {
    response.data
  }

  return response
})
