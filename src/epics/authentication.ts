import { Observable } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { ofType, Epic } from "redux-observable";
import { 
  AuthenticationAction, LoginFacebook, LoginFacebookSuccess, LogoutFacebook, LogoutFacebookSuccess, 
  loginFacebookSuccess, logoutFacebookSuccess 
} from "../actions/authentication";
import { AuthenticationState } from "../state";
import { ActionTypes } from '../constants';

const loginEpic: Epic<AuthenticationAction, LoginFacebookSuccess, AuthenticationState> = (action$) => action$.pipe(
  ofType<AuthenticationAction, LoginFacebook>(ActionTypes.AUTHENTICATION_LOGIN_FACEBOOK),
  mergeMap(_ => 
    new Observable<fb.StatusResponse>(observer => {
      FB.login(response => observer.next(response), { 
        scope: 'email'
      });
    })
  ),
  map(response => loginFacebookSuccess(response))
);

const logoutEpic: Epic<AuthenticationAction, LogoutFacebookSuccess, AuthenticationState> = (action$) => action$.pipe(
  ofType<AuthenticationAction, LogoutFacebook>(ActionTypes.AUTHENTICATION_LOGOUT_FACEBOOK),
  mergeMap(_ => 
    new Observable<fb.StatusResponse>(observer => {
      FB.logout(_ => observer.next());
    })
  ),
  map(_ => logoutFacebookSuccess())
);

export default [
  loginEpic,
  logoutEpic
];
