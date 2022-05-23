import { User } from "../util/types";
import { supabase } from "./api";

export interface SignUpUser {
  email: string;
  password: string;
  fullname: string;
  username: string;
}

export interface SignInUser {
  email: string;
  password: string;
}

export default class AuthService {
  static async signUp({ email, password }: SignUpUser) {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });

    return { user, error };
  }

  static async signIn({ email, password }: SignInUser) {
    const {
      error,
      user: _user,
      session,
    } = await supabase.auth.signIn({ email, password });

    if (!error && _user) {
      const response = await supabase
        .from<User>("users")
        .select("*")
        .eq("id", _user.id);

      const [user] = response.body!;

      return { user: { email, ...user }, session };
    }

    return { error };
  }
}
