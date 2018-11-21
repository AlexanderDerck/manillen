import { Card } from "../models";

export interface GameState {
  playerCards: Card[],
  fellowPlayerCards: number,
  opponent1Cards: number,
  opponent2Cards: number,
  playerPlayedCard?: Card,
  fellowPlayerPlayedCard?: Card,
  opponent1PlayedCard?: Card,
  opponent2PlayedCard?: Card
};
