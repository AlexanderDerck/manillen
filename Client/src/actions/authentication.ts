import { ActionTypes } from '../constants';
import { UserInfo, Error } from '../models/facebook';

export type AuthenticationAction =  LoginFacebook | LoginFacebookSuccess | LoginFacebookError
  | LogoutFacebook | LogoutFacebookSuccess
  | GetUserInfoFacebookSuccess | GetUserInfoFacebookError;

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

export interface LoginFacebookError {
  type: ActionTypes.AUTHENTICATION_LOGIN_FACEBOOK_ERROR,
  response: fb.StatusResponse
};
export const loginFacebookError = (response: fb.StatusResponse): LoginFacebookError => ({
  type: ActionTypes.AUTHENTICATION_LOGIN_FACEBOOK_ERROR,
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

export interface GetUserInfoFacebookSuccess {
  type: ActionTypes.AUTHENTICATION_GET_USER_INFO_FACEBOOK_SUCCESS,
  userInfo: UserInfo
};
export const getUserInfoFacebookSuccess = (userInfo: UserInfo): GetUserInfoFacebookSuccess => ({
  type: ActionTypes.AUTHENTICATION_GET_USER_INFO_FACEBOOK_SUCCESS,
  userInfo
});

export interface GetUserInfoFacebookError {
  type: ActionTypes.AUTHENTICATION_GET_USER_INFO_FACEBOOK_ERROR,
  error: Error
};
export const getUserInfoFacebookError = (error: Error): GetUserInfoFacebookError => ({
  type: ActionTypes.AUTHENTICATION_GET_USER_INFO_FACEBOOK_ERROR,
  error
});
