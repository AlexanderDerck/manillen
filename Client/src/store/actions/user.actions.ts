import { createAction } from '@reduxjs/toolkit';
import { Error, UserInfo } from '../../models/facebook';
import { actionTypes, props } from '../utils';

export const loginFacebook = createAction('[User] Login facebook');
export const loginFacebookSuccess = createAction('[User] Login facebook success', props<{ response: fb.StatusResponse }>());
export const loginFacebookError = createAction('[User] Login facebook error', props<{ error: Error }>());
export const logoutFacebook = createAction('[User] Logout facebook');
export const logoutFacebookSuccess = createAction('[User] Logout facebook success');
export const getUserInfoFacebookSuccess = createAction('[User] Get user info facebook success', props<{ userInfo: UserInfo }>());
export const getUserInfoFacebookError = createAction('[User] Get user info facebook error', props<{ error: Error }>());

export const userActionCreatorMap = {
  loginFacebook,
  loginFacebookSuccess,
  loginFacebookError,
  logoutFacebook,
  logoutFacebookSuccess,
  getUserInfoFacebookSuccess,
  getUserInfoFacebookError
};
const all = actionTypes(userActionCreatorMap);
export type UserAction = typeof all;
