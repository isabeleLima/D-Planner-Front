import { User } from "../util/types"

export default class StorageService {
  static getUser() {
    const json = localStorage.getItem("user")
    return json ? (JSON.parse(json) as User) : null
  }

  static setUser(user: User) {
    const json = JSON.stringify(user)
    localStorage.setItem("user", json)
  }

  static resetUser() {
    localStorage.removeItem("user")
  }

  static getToken() {
    return localStorage.getItem("token")
  }

  static setToken(token: string) {
    localStorage.setItem("token", token)
  }

  static resetToken(token: string) {
    localStorage.removeItem("token")
  }
}
