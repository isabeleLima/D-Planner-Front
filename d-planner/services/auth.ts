import { User } from "../util/types";
import { supabase } from "./api";

export interface SignUpUser {
  email: string;
  senha: string;
  fullname: string;
  username: string;
}

export interface SignInUser {
  email: string;
  senha: string;
}

