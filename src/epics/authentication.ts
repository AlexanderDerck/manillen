import { bindCallback } from 'rxjs';
import { mergeMap, map, tap } from 'rxjs/operators';
import { ofType, Epic } from "redux-observable";
import { AuthenticationAction, GetLoginInfo, getLoginInfoSuccess } from "../actions/authentication";
import { AuthenticationState } from "../state";
import { ActionTypes } from '../constants';

export const authenticationEpic: Epic<AuthenticationAction, AuthenticationAction, AuthenticationState> = (action$, state$) => action$.pipe(
  ofType<AuthenticationAction, GetLoginInfo>(ActionTypes.AUTHENTICATION_GET_LOGIN_INFO),
  mergeMap(_ => bindCallback<fb.StatusResponse>(FB.getLoginStatus)()),
  map(response => getLoginInfoSuccess(response))
);
