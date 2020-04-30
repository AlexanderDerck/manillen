import { User } from "../models/User";

export interface AuthenticationState {
  isAuthenticated: boolean,
  accessToken?: string,
  /**
   * User with info from own database
   */
  user?: User
};
