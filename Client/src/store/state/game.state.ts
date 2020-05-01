import { Ranks, Suits } from '../../constants';
import { Card } from '../../models';

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

const initialCards = [
  { rank: Ranks.Seven, suit: Suits.Spades },
  { rank: Ranks.Eight, suit: Suits.Spades },
  { rank: Ranks.Nine, suit: Suits.Spades },
  { rank: Ranks.Ten, suit: Suits.Spades },
  { rank: Ranks.Jack, suit: Suits.Spades },
  { rank: Ranks.Queen, suit: Suits.Spades },
  { rank: Ranks.King, suit: Suits.Spades },
  { rank: Ranks.Ace, suit: Suits.Spades }
];
export const initialGameState: GameState = {
  playerCards: initialCards,
  fellowPlayerCards: 8,
  opponent1Cards: 8,
  opponent2Cards: 8,
  playerPlayedCard: undefined,
  fellowPlayerPlayedCard: undefined,
  opponent1PlayedCard: undefined,
  opponent2PlayedCard: undefined
};
