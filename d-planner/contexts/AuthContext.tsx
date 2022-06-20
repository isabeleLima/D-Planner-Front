import { createContext, useContext, useState } from "react"
import { User } from "../util/types"
import AuthService, { SignInUser, SignUpUser } from "../services/auth"
import Router from "next/router"
import { api } from "../services/axios"

interface Context {
  signIn: (user: SignInUser) => Promise<void>
  signUp: (user: SignUpUser) => Promise<User | undefined>
}

const authContext = createContext({} as Context)

interface Props {
  children: React.ReactNode
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const signIn = async (user: SignInUser) => {
    try {
      await AuthService.signIn(user)

      Router.push("/home")
    } catch (error) {
      console.log(error)
    }
  }

  const signUp = async (user: SignUpUser) => {
    try {
      return await AuthService.signUp(user)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <authContext.Provider value={{ signIn, signUp }}>
      {children}
    </authContext.Provider>
  )
}

export const useAuth = () => useContext<Context>(authContext)
