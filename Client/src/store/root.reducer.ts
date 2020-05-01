import { combineReducers } from '@reduxjs/toolkit';
import { gameReducer } from './reducers/game.reducer';
import { userReducer } from './reducers/user.reducer';

export const rootReducer = combineReducers({
  game: gameReducer,
  user: userReducer
});