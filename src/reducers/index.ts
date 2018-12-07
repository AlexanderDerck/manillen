import { combineReducers } from 'redux';
import { game } from './game';
import { authentication } from './authentication';

export const rootReducer = combineReducers({
  authentication,
  game
});
