import { ApiError } from "@supabase/supabase-js";
import { createContext, useContext, useState } from "react";
import AuthService, { SignInUser } from "../services/auth";
import { User } from "../util/types";

interface Context {
  user?: User;
  signIn: (user: SignInUser) => Promise<{
    error?: ApiError | null;
    user?: User;
  }>;
}

const authContext = createContext({} as Context);

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User>();

  const signIn = async (_user: SignInUser) => {
    const { error, user } = await AuthService.signIn(_user);
    if (!error && user) {
      setUser(user);
    }
    return { error, user };
  };

  return (
    <authContext.Provider value={{ user, signIn }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
