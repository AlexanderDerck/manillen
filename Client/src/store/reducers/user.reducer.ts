import {
    getUserInfoFacebookError, getUserInfoFacebookSuccess, loginFacebookError, loginFacebookSuccess,
    logoutFacebookSuccess, UserAction
} from '../actions';
import { initialUserState, UserState } from '../state/user.state';

export function userReducer(state: UserState = initialUserState, action: UserAction): UserState {
  switch(action.type) {
    case loginFacebookSuccess.type: 
    return {
      ...state,
      isAuthenticated: true,
      accessToken: action.payload.response.authResponse.accessToken
    };
    case loginFacebookError.type:
      return {
        ...state,
        isAuthenticated: false,
        accessToken: undefined
      };
    case logoutFacebookSuccess.type: 
    return {
      isAuthenticated: false,
      accessToken: undefined,
      user: undefined
    };
    case getUserInfoFacebookSuccess.type:
      const userInfo = action.payload.userInfo;
      return {
        ...state,
        user: {
          id: 0,
          facebookId: +userInfo.id,
          firstName: userInfo.first_name || '',
          lastName: userInfo.last_name || '',
          email: userInfo.email,
          profilePictureUrl: userInfo.picture && userInfo.picture.data.url
        }
      };
    case getUserInfoFacebookError.type:
      return {
        ...state,
        isAuthenticated: false,
        user: undefined
      };
    default: return state;
  }
}
