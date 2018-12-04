import { AuthenticationState } from '../state';
import { AuthenticationAction } from '../actions/authentication';

const initialState: AuthenticationState = {
  isAuthenticated: false,
  user: undefined
};

export function authentication(state: AuthenticationState = initialState, action: AuthenticationAction) {
  switch(action.type) {

    default: return state;
  }
}
