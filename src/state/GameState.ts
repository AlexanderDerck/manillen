import { Card } from "../models";

export interface GameState {
  playerCards: Card[],
  fellowPlayerCards: number,
  opponent1Cards: number,
  opponent2Cards: number
};
