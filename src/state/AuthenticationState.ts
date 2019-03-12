import { User } from "../models/User";

export interface AuthenticationState {
  isAuthenticated: boolean,
  accessToken?: string,
  user?: User
};
