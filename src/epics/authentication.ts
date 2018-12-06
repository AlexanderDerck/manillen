import { Observable } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { ofType, Epic } from "redux-observable";
import { 
  AuthenticationAction, Login, LoginSuccess, LoginError, Logout, LogoutSuccess, LogoutError, 
  loginSuccess, logoutSuccess 
} from "../actions/authentication";
import { AuthenticationState } from "../state";
import { ActionTypes } from '../constants';

const loginEpic: Epic<AuthenticationAction, LoginSuccess|LoginError, AuthenticationState> = (action$) => action$.pipe(
  ofType<AuthenticationAction, Login>(ActionTypes.AUTHENTICATION_LOGIN),
  mergeMap(_ => 
    new Observable<fb.StatusResponse>(observer => {
      FB.login(response => observer.next(response), { 
        scope: 'email'
      });
    })
  ),
  map(response => loginSuccess(response))
);

const logoutEpic: Epic<AuthenticationAction, LogoutSuccess|LogoutError, AuthenticationState> = (action$) => action$.pipe(
  ofType<AuthenticationAction, Logout>(ActionTypes.AUTHENTICATION_LOGOUT),
  mergeMap(_ => 
    new Observable<fb.StatusResponse>(observer => {
      FB.logout(_ => observer.next());
    })
  ),
  map(_ => logoutSuccess())
);

export default [
  loginEpic,
  logoutEpic
];
