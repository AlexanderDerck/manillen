import { combineEpics } from 'redux-observable';
import * as userEpics from './epics/user.epics';

export const rootEpic: any = combineEpics(
  ...Object.values(userEpics)
);