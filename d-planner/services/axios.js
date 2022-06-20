import axios from "axios"
import StorageService from "./storage"

export const api = axios.create({
  baseURL: "http://localhost:8080",
})

api.interceptors.request.use(config => {
  const token = StorageService.getToken()

  config.headers.Authorization = token

  return config
})
