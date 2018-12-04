import { combineEpics } from 'redux-observable';
import { authenticationEpic } from './authentication';

// TODO: Is it possible to make this typesafe?
export const rootEpic: any = combineEpics(
  authenticationEpic
);
