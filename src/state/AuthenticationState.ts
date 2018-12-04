import { User } from "../models/User";

export interface AuthenticationState {
  isAuthenticated: boolean,
  user?: User
};
