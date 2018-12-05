import { AuthenticationState } from '../state';
import { AuthenticationAction, GetLoginInfoSuccess } from '../actions/authentication';
import { ActionTypes } from '../constants';

const initialState: AuthenticationState = {
  isAuthenticated: false,
  user: undefined
};

export function authentication(state: AuthenticationState = initialState, action: AuthenticationAction): AuthenticationState {
  switch(action.type) {
    case ActionTypes.AUTHENTICATION_GET_LOGIN_INFO_SUCCESS: return getLoginInfoSuccess(state, action.response);
    default: return state;
  }
}

function getLoginInfoSuccess(state: AuthenticationState, response: fb.StatusResponse): AuthenticationState {
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
  };
}
