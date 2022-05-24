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
  static async signUp({ email, password, fullname, username }: SignUpUser) {
    const { user: _user, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (!error && _user) {
      const response = await supabase
        .from<Omit<User, "email">>("users")
        .insert([{ id: _user.id, fullname, username }])
        .eq("id", _user.id);

      const [__user] = response.body!;
      const user = { ...__user, email };

      return { user };
    }

    return { error };
  }

  static async signIn({ email, password }: SignInUser) {
    const {
      error,
      user: _user,
      session,
    } = await supabase.auth.signIn({ email, password });

    if (!error && _user) {
      const response = await supabase
        .from<Omit<User, "email">>("users")
        .select("*")
        .eq("id", _user.id);

      const [__user] = response.body!;
      const user = { ...__user, email };

      this.saveUser(user);

      return { user, session };
    }

    return { error };
  }

  static async saveUser(user: User): Promise<void> {
    const json = JSON.stringify(user);
    localStorage.setItem("user", json);
  }

  static async loadUser(): Promise<User | undefined> {
    const json = localStorage.getItem("user");
    if (json) return JSON.parse(json);
    return undefined;
  }
}
