import { ChatState, initialChatState } from './state/chat.state';
import { GameState, initialGameState } from './state/game.state';
import { initialUserState, UserState } from './state/user.state';

export interface RootState {
  chat: ChatState;
  user: UserState,
  game: GameState
};

export const initialRootState: RootState = {
  chat: initialChatState,
  game: initialGameState,
  user: initialUserState
};
