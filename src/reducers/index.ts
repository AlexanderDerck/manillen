import { combineReducers, Reducer, Action } from 'redux';
import { game } from './game';
import { State } from '../state';

export const rootReducer: Reducer<State, Action> = combineReducers({
  game
});
