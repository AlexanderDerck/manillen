import { GameState } from "./GameState";
import { AuthenticationState} from './AuthenticationState';

export interface State {
  authentication: AuthenticationState
  game: GameState
};
