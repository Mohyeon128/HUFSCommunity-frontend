import { makeAutoObservable } from "mobx";
import { app } from "@apis/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { UserDTO } from "@_types/common-type";
import axios from "axios";
import { baseURL } from "@apis/common-api";

class AuthStore {
  auth = getAuth(app);

  user: UserDTO | undefined = undefined;
  token: string = "";
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: UserDTO) {
    this.user = user;
  }

  setToken(token: string) {
    this.token = token;
  }

  setIsLoading(loading: boolean) {
    this.isLoading = loading;
  }

  async getCurrentUserToken() {
    const idToken = await this.auth.currentUser?.getIdToken(true);
    this.setToken(idToken);
  }

  async getCurrentUserData(uid: string) {
    this.setIsLoading(true);
    await this.getCurrentUserToken();

    const response = await axios.get<UserDTO>("/users", { baseURL: baseURL });
    this.setUser(response.data);
    this.setIsLoading(false);
  }

  async register(email: string, password: string) {
    try {
      const result = await createUserWithEmailAndPassword(this.auth, email, password);
      this.getCurrentUserData(result.user.uid);
      return { successful: true };
    } catch {
      return { successful: false };
    }
  }

  async login(email: string, password: string) {
    try {
      const result = await signInWithEmailAndPassword(getAuth(app), email, password);
      console.log(result);
      this.getCurrentUserData(result.user.uid);
      return { successful: true };
    } catch {
      return { successful: false };
    }
  }

  async logout() {
    try {
      await signOut(this.auth);
      this.setUser(undefined);
      this.setToken("");
      return { successful: true };
    } catch {
      return { successful: false };
    }
  }

  observeAuthChanges() {
    onAuthStateChanged(this.auth, async (user) => {
      if (user) {
        try {
          this.getCurrentUserData(user.uid);
        } catch {
          return { successful: false };
        }
      } else {
        this.setUser(undefined);
        this.setToken("");
        return { successful: false };
      }
    });
  }
}

export default new AuthStore();
