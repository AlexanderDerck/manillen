import { ActionTypes } from '../constants';

export type AuthenticationAction =
  Login | LoginSuccess | LoginError |
  Logout | LogoutSuccess | LogoutError;

export interface Login {
  type: ActionTypes.AUTHENTICATION_LOGIN
};
export const login = (): Login => ({
  type: ActionTypes.AUTHENTICATION_LOGIN
});

export interface LoginSuccess {
  type: ActionTypes.AUTHENTICATION_LOGIN_SUCCESS,
  response: fb.StatusResponse
};
export const loginSuccess = (response: fb.StatusResponse): LoginSuccess => ({
  type: ActionTypes.AUTHENTICATION_LOGIN_SUCCESS,
  response
});

export interface LoginError {
  type: ActionTypes.AUTHENTICATION_LOGIN_ERROR
};
export const loginError = (): LoginError => ({
  type: ActionTypes.AUTHENTICATION_LOGIN_ERROR
});

export interface Logout {
  type: ActionTypes.AUTHENTICATION_LOGOUT
};
export const logout = (): Logout => ({
  type: ActionTypes.AUTHENTICATION_LOGOUT
});

export interface LogoutSuccess {
  type: ActionTypes.AUTHENTICATION_LOGOUT_SUCCESS
};
export const logoutSuccess = (): LogoutSuccess => ({
  type: ActionTypes.AUTHENTICATION_LOGOUT_SUCCESS
});

export interface LogoutError {
  type: ActionTypes.AUTHENTICATION_LOGOUT_ERROR
};
export const logoutError = (): LogoutError => ({
  type: ActionTypes.AUTHENTICATION_LOGOUT_ERROR
});
