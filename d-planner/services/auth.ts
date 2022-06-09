import { User } from "../util/types";
import { supabase } from "./api";

export interface SignUpUser {
  id: number,
  email: string;
  senha: string;
  nome: string;
  username: string;
}

export interface SignInUser {
  email: string;
  senha: string;
}

