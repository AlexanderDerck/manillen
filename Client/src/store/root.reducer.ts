import { combineReducers } from '@reduxjs/toolkit';
import { chatReducer } from './reducers/chat.reducer';
import { gameReducer } from './reducers/game.reducer';
import { userReducer } from './reducers/user.reducer';

export const rootReducer = combineReducers({
  chat: chatReducer,
  game: gameReducer,
  user: userReducer
});