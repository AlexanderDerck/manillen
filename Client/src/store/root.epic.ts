import { combineEpics } from 'redux-observable';
import * as chatEpics from './epics/chat.epics';
import * as userEpics from './epics/user.epics';

export const rootEpic = combineEpics<any>(
  ...Object.values(chatEpics), 
  ...Object.values(userEpics)
);