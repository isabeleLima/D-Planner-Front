import { User } from "../util/types"
import { api } from "./axios"
import StorageService from "./storage"

export interface SignUpUser {
  email: string
  senha: string
  nome: string
  username: string
}

export interface SignInUser {
  email: string
  senha: string
}

export default class AuthService {
  static async signUp(user: SignUpUser) {
    const { data } = await api.post<User>("/user/new", user)
    return data
  }

  static async signIn(user: SignInUser) {
    const res = await api.post("/login", user)
    console.log(res)
    StorageService.setToken(res.headers.authorization)

    const { data } = await api.post<User>("/user/findUser", {
      email: user.email,
    })
    console.log(data)
    StorageService.setUser(data)
  }
}
