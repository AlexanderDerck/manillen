import { combineEpics } from 'redux-observable';
import authenticationEpics from './authentication';

// TODO: Is it possible to make this typesafe?
export const rootEpic: any = combineEpics(
  ...authenticationEpics
);
