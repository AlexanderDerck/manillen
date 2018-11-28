import { ActionTypes } from '../constants';

export type AuthenticationActions =
  Login | LoginSuccess | LoginError |
  Logout | 
  GetLoginInfo | GetLoginInfoSuccess | GetLoginInfoError;

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

export interface GetLoginInfo {
  type: ActionTypes.AUTHENTICATION_GET_LOGIN_INFO
};
export const getLoginInfo = (): GetLoginInfo => ({
  type: ActionTypes.AUTHENTICATION_GET_LOGIN_INFO
});

export interface GetLoginInfoSuccess {
  type: ActionTypes.AUTHENTICATION_GET_LOGIN_INFO_SUCCESS,
  response: fb.StatusResponse
};
export const getLoginInfoSuccess = (response: fb.StatusResponse): GetLoginInfoSuccess => ({
  type: ActionTypes.AUTHENTICATION_GET_LOGIN_INFO_SUCCESS,
  response
});

export interface GetLoginInfoError {
  type: ActionTypes.AUTHENTICATION_GET_LOGIN_INFO_ERROR
};
export const getLoginInfoError = (): GetLoginInfoError => ({
  type: ActionTypes.AUTHENTICATION_GET_LOGIN_INFO_ERROR
});
