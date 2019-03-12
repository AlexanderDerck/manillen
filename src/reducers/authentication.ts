import { AuthenticationState } from '../state';
import { AuthenticationAction } from '../actions/authentication';
import { ActionTypes } from '../constants';

const initialState: AuthenticationState = {
  isAuthenticated: false,
  user: undefined
};

export function authentication(state: AuthenticationState = initialState, action: AuthenticationAction): AuthenticationState {
  switch(action.type) {
    case ActionTypes.AUTHENTICATION_LOGIN_FACEBOOK_SUCCESS: return loginSuccess(state, action.response);
    case ActionTypes.AUTHENTICATION_LOGOUT_FACEBOOK_SUCCESS: return logoutSuccess();
    default: return state;
  }
}

function loginSuccess(state: AuthenticationState, response: fb.StatusResponse): AuthenticationState {
  if(response.status !== "connected") {
    return state;
  }

  return {
    isAuthenticated: true,
    accessToken: response.authResponse.accessToken,
    user: {
      firstName: 'Alexander',
      lastName: 'Derck',
      userId: response.authResponse.userID
    }
  };
}

function logoutSuccess(): AuthenticationState {
  return {
    isAuthenticated: false,
    accessToken: undefined,
    user: undefined
  };
}
