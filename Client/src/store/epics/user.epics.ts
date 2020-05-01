import { Epic, ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { LoginScope, UserInfoFields } from '../../constants/facebook';
import { GetUserInfoResponse, UserInfo } from '../../models/facebook';
import {
    getUserInfoFacebookError, getUserInfoFacebookSuccess, loginFacebook, loginFacebookError,
    loginFacebookSuccess, logoutFacebook, logoutFacebookSuccess, UserAction
} from '../actions';

export const loginFacebookEpic: Epic<UserAction> = (action$) => action$.pipe(
  ofType(loginFacebook.type),
  mergeMap(_ => 
    new Observable<fb.StatusResponse>(observer => FB.login(
      response => observer.next(response), 
      { scope: LoginScope.email }           // Email needs additional permissions from user
    ))
  ),
  map(response => response.status === "connected"
    ? loginFacebookSuccess({ response })
    : loginFacebookError({ error: null })
  )
);

export const getUserInfoFacebookEpic: Epic<UserAction> = (action$) => action$.pipe(
  ofType(loginFacebookSuccess.type),
  mergeMap(loginFacebookSuccess => 
    new Observable<GetUserInfoResponse>(observer => FB.api<any, UserInfo>(
      `/${loginFacebookSuccess.payload.response.authResponse.userID}/`, 
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
    ? getUserInfoFacebookError({ error: response.error })
    : getUserInfoFacebookSuccess({ userInfo: response })
  )
);

export const logoutFacebookEpic: Epic<UserAction> = (action$) => action$.pipe(
  ofType(logoutFacebook.type),
  mergeMap(_ => 
    new Observable<fb.StatusResponse>(observer => {
      FB.logout(_ => observer.next());
    })
  ),
  map(_ => logoutFacebookSuccess())
);
