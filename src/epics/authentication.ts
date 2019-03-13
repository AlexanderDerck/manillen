import { Observable } from 'rxjs';
import { mergeMap, map, tap } from 'rxjs/operators';
import { ofType, Epic } from "redux-observable";
import { 
  AuthenticationAction, LoginFacebook, LoginFacebookSuccess, LogoutFacebook, 
  LogoutFacebookSuccess, GetUserInfoFacebookSuccess 
} from "../actions/authentication";
import { loginFacebookSuccess, logoutFacebookSuccess, getUserInfoFacebookSuccess } from '../actions/authentication';
import { AuthenticationState } from "../state";
import { ActionTypes, FacebookUserInfoFields } from '../constants';
import { UserInfo } from '../models/facebook';
import { string } from 'prop-types';

const loginFacebookEpic: Epic<AuthenticationAction, LoginFacebookSuccess, AuthenticationState> = (action$) => action$.pipe(
  ofType<AuthenticationAction, LoginFacebook>(ActionTypes.AUTHENTICATION_LOGIN_FACEBOOK),
  mergeMap(_ => 
    new Observable<fb.StatusResponse>(observer => FB.login(
      response => observer.next(response), 
      { 
        scope: 'email'
      }
    ))
  ),
  map(response => loginFacebookSuccess(response))
);

const getUserInfoFacebookEpic: Epic<AuthenticationAction, GetUserInfoFacebookSuccess, AuthenticationState> = (action$) => action$.pipe(
  ofType<AuthenticationAction, LoginFacebookSuccess>(ActionTypes.AUTHENTICATION_LOGIN_FACEBOOK_SUCCESS),
  mergeMap(loginFacebookSuccess => 
    new Observable<object>(observer => FB.api(
      `/${loginFacebookSuccess.response.authResponse.userID}/`, 
      { 
        fields: [
          FacebookUserInfoFields.email,
          FacebookUserInfoFields.firstName,
          FacebookUserInfoFields.lastName,
          FacebookUserInfoFields.picture
        ].join(", ")
      },
      response => observer.next(response as UserInfo)
    ))
  ),
  map(response => getUserInfoFacebookSuccess(response))
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
