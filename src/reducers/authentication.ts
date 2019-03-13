import { AuthenticationState } from '../state';
import { AuthenticationAction } from '../actions/authentication';
import { ActionTypes } from '../constants';
import { UserInfo } from '../models/facebook';
import { number } from 'prop-types';

const initialState: AuthenticationState = {
  isAuthenticated: false,
  user: undefined
};

export function authentication(state: AuthenticationState = initialState, action: AuthenticationAction): AuthenticationState {
  switch(action.type) {
    case ActionTypes.AUTHENTICATION_LOGIN_FACEBOOK_SUCCESS: 
      return loginFacebookSuccess(state, action.response);
    case ActionTypes.AUTHENTICATION_LOGOUT_FACEBOOK_SUCCESS: 
      return logoutFacebookSuccess();
    case ActionTypes.AUTHENTICATION_GET_USER_INFO_FACEBOOK_SUCCESS:
      return getUserInfoFacebookSuccess(state, action.userInfo)
    default: return state;
  }
}

function loginFacebookSuccess(state: AuthenticationState, response: fb.StatusResponse): AuthenticationState {
  if(response.status !== "connected") {
    return state;
  }

  return {
    ...state,
    isAuthenticated: true,
    accessToken: response.authResponse.accessToken
  };
}

function getUserInfoFacebookSuccess(state: AuthenticationState, userInfo: UserInfo): AuthenticationState {
  return {
    ...state,
    user: {
      id: 0,
      facebookId: new Number(userInfo.id).valueOf(),
      firstName: userInfo.first_name || '',
      lastName: userInfo.last_name || '',
      email: userInfo.email || '',
      profilePictureUrl: userInfo.picture && userInfo.picture.data.url || ''
    }
  };
}

function logoutFacebookSuccess(): AuthenticationState {
  return {
    isAuthenticated: false,
    accessToken: undefined,
    user: undefined
  };
}
