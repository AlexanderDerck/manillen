import { combineReducers, Reducer } from 'redux';
import { ActionTypes, Ranks, Suits } from '../constants';
import { Card } from '../models';
import { GameState } from '../state';
import { PlayerPickedCard, FellowPlayerPickedCard, Opponent1PickedCard, Opponent2PickedCard, GameAction } from '../actions/game';

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

function playerCards(state: Card[] = initialCards, action: PlayerPickedCard) {
  switch(action.type) {
    case ActionTypes.GAME_PLAYER_PICKED_CARD: {
      const pickedCard = action.card;
      return state.filter(card => card.suit !== pickedCard.suit || card.rank !== pickedCard.rank);
    }
    default:
      return state;
  }
}

function fellowPlayerCards(state = 8, action: FellowPlayerPickedCard) {
  switch(action.type) {
    case ActionTypes.GAME_FELLOWPLAYER_PICKED_CARD: {
      return --state;
    }
    default:
      return state;
  }
}

function opponent1Cards(state = 8, action: Opponent1PickedCard) {
  switch(action.type) {
    case ActionTypes.GAME_OPPONENT1_PICKED_CARD: {
      return --state;
    }
    default:
      return state;
  }
}

function opponent2Cards(state = 8, action: Opponent2PickedCard) {
  switch(action.type) {
    case ActionTypes.GAME_OPPONENT2_PICKED_CARD: {
      return --state;
    }
    default:
      return state;
  }
}

export const game: Reducer<GameState, GameAction> = combineReducers({
  playerCards,
  fellowPlayerCards,
  opponent1Cards,
  opponent2Cards
});
