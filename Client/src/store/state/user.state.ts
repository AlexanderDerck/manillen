import { User } from '../../models/User';

export interface UserState {
  isAuthenticated: boolean,
  accessToken?: string,
  /**
   * User with info from own database
   */
  user?: User
};

export const initialUserState: UserState = {
  isAuthenticated: false,
  user: null
};
