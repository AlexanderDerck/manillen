import { ActionTypes } from '../constants';

export type AuthenticationAction =  LoginFacebook 
  | LoginFacebookSuccess 
  | LogoutFacebook 
  | LogoutFacebookSuccess;

export interface LoginFacebook {
  type: ActionTypes.AUTHENTICATION_LOGIN_FACEBOOK
};
export const loginFacebook = (): LoginFacebook => ({
  type: ActionTypes.AUTHENTICATION_LOGIN_FACEBOOK
});

export interface LoginFacebookSuccess {
  type: ActionTypes.AUTHENTICATION_LOGIN_FACEBOOK_SUCCESS,
  response: fb.StatusResponse
};
export const loginFacebookSuccess = (response: fb.StatusResponse): LoginFacebookSuccess => ({
  type: ActionTypes.AUTHENTICATION_LOGIN_FACEBOOK_SUCCESS,
  response
});

export interface LogoutFacebook {
  type: ActionTypes.AUTHENTICATION_LOGOUT_FACEBOOK
};
export const logoutFacebook = (): LogoutFacebook => ({
  type: ActionTypes.AUTHENTICATION_LOGOUT_FACEBOOK
});

export interface LogoutFacebookSuccess {
  type: ActionTypes.AUTHENTICATION_LOGOUT_FACEBOOK_SUCCESS
};
export const logoutFacebookSuccess = (): LogoutFacebookSuccess => ({
  type: ActionTypes.AUTHENTICATION_LOGOUT_FACEBOOK_SUCCESS
});
