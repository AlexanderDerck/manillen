import { User } from "../models/User";

export interface AuthenticationState {
  isAuthenticated: boolean,
  accessToken?: string,
  facebookUserId?: string,
  /**
   * User with info from own database
   */
  user?: User
};
