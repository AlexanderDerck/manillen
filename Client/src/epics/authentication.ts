import { Observable } from 'rxjs';
import { mergeMap, map, tap } from 'rxjs/operators';
import { ofType, Epic } from "redux-observable";
import { 
  AuthenticationAction, LoginFacebook, LoginFacebookSuccess, LogoutFacebook, 
  LogoutFacebookSuccess, GetUserInfoFacebookSuccess, loginFacebookError, LoginFacebookError, getUserInfoFacebookError, GetUserInfoFacebookError 
} from "../actions/authentication";
import { loginFacebookSuccess, logoutFacebookSuccess, getUserInfoFacebookSuccess } from '../actions/authentication';
import { AuthenticationState } from "../state";
import { ActionTypes } from '../constants';
import { LoginScope, UserInfoFields } from '../constants/facebook';
import { GetUserInfoResponse } from '../models/facebook';

const loginFacebookEpic: Epic<AuthenticationAction, LoginFacebookSuccess|LoginFacebookError, AuthenticationState> = (action$) => action$.pipe(
  ofType<AuthenticationAction, LoginFacebook>(ActionTypes.AUTHENTICATION_LOGIN_FACEBOOK),
  mergeMap(_ => 
    new Observable<fb.StatusResponse>(observer => FB.login(
      response => observer.next(response), 
      { scope: LoginScope.email }           // Email needs additional permissions from user
    ))
  ),
  map(response => response.status === "connected"
    ? loginFacebookSuccess(response)
    : loginFacebookError(response)
  )
);

const getUserInfoFacebookEpic: Epic<AuthenticationAction, GetUserInfoFacebookSuccess|GetUserInfoFacebookError, AuthenticationState> = (action$) => action$.pipe(
  ofType<AuthenticationAction, LoginFacebookSuccess>(ActionTypes.AUTHENTICATION_LOGIN_FACEBOOK_SUCCESS),
  mergeMap(loginFacebookSuccess => 
    new Observable<GetUserInfoResponse>(observer => FB.api(
      `/${loginFacebookSuccess.response.authResponse.userID}/`, 
      { 
        fields: [
          UserInfoFields.email,
          UserInfoFields.firstName,
          UserInfoFields.lastName,
          UserInfoFields.picture
        ].join(", ")
      },
      response => observer.next(response)
    ))
  ),
  map(response => response.error
    ? getUserInfoFacebookError(response.error)
    : getUserInfoFacebookSuccess(response)
  )
);

const logoutFacebookEpic: Epic<AuthenticationAction, LogoutFacebookSuccess, AuthenticationState> = (action$) => action$.pipe(
  ofType<AuthenticationAction, LogoutFacebook>(ActionTypes.AUTHENTICATION_LOGOUT_FACEBOOK),
  mergeMap(_ => 
    new Observable<fb.StatusResponse>(observer => {
      FB.logout(_ => observer.next());
    })
  ),
  map(_ => logoutFacebookSuccess())
);

export default [
  loginFacebookEpic,
  getUserInfoFacebookEpic,
  logoutFacebookEpic
];