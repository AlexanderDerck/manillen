import { GameState } from "./GameState";
import { User } from "../models/User";

export interface State {
  game: GameState,
  user: User
};
