import { combineReducers } from 'redux';
import types from '../constants/actionTypes';
import { Card } from '../models';
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

function playerCards(state = initialCards, action) {
  switch(action.type) {
    case types.GAME_PLAYER_PICKED_CARD: {
      const pickedCard = action.card;
      return state.filter(card => card.suit !== pickedCard.suit || card.rank !== pickedCard.rank);
    }
    default:
      return state;
  }
}

function fellowPlayerCards(state = 8, action) {
  switch(action.type) {
    case types.GAME_FELLOWPLAYER_PICKED_CARD: {
      return --state;
    }
    default:
      return state;
  }
}

function opponent1Cards(state = 8, action) {
  switch(action.type) {
    case types.GAME_OPPONENT1_PICKED_CARD: {
      return --state;
    }
    default:
      return state;
  }
}

function opponent2Cards(state = 8, action) {
  switch(action.type) {
    case types.GAME_OPPONENT2_PICKED_CARD: {
      return --state;
    }
    default:
      return state;
  }
}

export const game = combineReducers({
  playerCards,
  fellowPlayerCards,
  opponent1Cards,
  opponent2Cards
});
