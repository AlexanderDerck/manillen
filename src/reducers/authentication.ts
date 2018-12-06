import { AuthenticationState } from '../state';
import { AuthenticationAction } from '../actions/authentication';
import { ActionTypes } from '../constants';

const initialState: AuthenticationState = {
  isAuthenticated: false,
  user: undefined
};

export function authentication(state: AuthenticationState = initialState, action: AuthenticationAction): AuthenticationState {
  switch(action.type) {
    case ActionTypes.AUTHENTICATION_LOGIN_SUCCESS: return loginSuccess(state, action.response);
    case ActionTypes.AUTHENTICATION_LOGOUT_SUCCESS: return logoutSuccess();
    default: return state;
  }
}

function loginSuccess(state: AuthenticationState, response: fb.StatusResponse): AuthenticationState {
  if(response.status !== "connected") {
    return state;
  }

  return {
    isAuthenticated: true,
    user: {
      accessToken: response.authResponse.accessToken,
      firstName: 'Alexander',
      lastName: 'Derck',
      userId: response.authResponse.userID
    }
  }
}

function logoutSuccess(): AuthenticationState {
  return {
    isAuthenticated: false,
    user: undefined
  };
}
