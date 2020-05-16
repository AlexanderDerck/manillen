import { User } from '../../models';

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
