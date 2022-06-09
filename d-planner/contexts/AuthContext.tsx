import { createContext, useContext, useEffect, useState } from "react";
import{ SignInUser } from "../services/auth";
import { User } from "../util/types";
import Router from "next/router";
import {api} from "../pages/service/axios";

interface Context {
  signIn: (email:string,senha:string) => {};
}

const authContext = createContext({} as Context);

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const signIn = async (email:string,senha:string) => {
   
    await api.post("/login", {
     email,senha
    }).then((response) =>{
      console.log(response.headers.authorization)
      localStorage.setItem('token',response.headers.authorization);
      localStorage.setItem('email-user',email);
    })
    Router.push("./home");
  };

  return (
    <authContext.Provider value={{signIn }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
