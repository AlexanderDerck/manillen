import { GameState, initialGameState } from './state/game.state';
import { initialUserState, UserState } from './state/user.state';

export interface RootState {
  user: UserState,
  game: GameState
};

export const initialRootState: RootState = {
  game: initialGameState,
  user: initialUserState
};
