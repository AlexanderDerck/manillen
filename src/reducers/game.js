import types from '../constants/actionTypes';
import { Card } from '../models/card';
import { Ranks, Suits } from '../constants/card';

const initialCards = [
  new Card(Ranks.Seven, Suits.Spades),
  new Card(Ranks.Eight, Suits.Spades),
  new Card(Ranks.Nine, Suits.Spades),
  new Card(Ranks.Ten, Suits.Spades),
  new Card(Ranks.Jack, Suits.Spades),
  new Card(Ranks.Queen, Suits.Spades),
  new Card(Ranks.King, Suits.Spades),
  new Card(Ranks.Ace, Suits.Spades)
];

export function remainingCards(state = initialCards, action) {
  switch(action.type) {
    case types.GAME_PICKED_CARD: {
      const pickedCard = action.card;
      return state.filter(card => card.suit !== pickedCard.suit || card.rank !== pickedCard.rank);
    }
    default:
      return state;
  }
}