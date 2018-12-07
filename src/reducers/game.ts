import { ActionTypes, Ranks, Suits } from '../constants';
import { GameState } from '../state';
import { GameAction } from '../actions/game';

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
const initialState: GameState = {
  playerCards: initialCards,
  fellowPlayerCards: 8,
  opponent1Cards: 8,
  opponent2Cards: 8,
  playerPlayedCard: undefined,
  fellowPlayerPlayedCard: undefined,
  opponent1PlayedCard: undefined,
  opponent2PlayedCard: undefined
};

export function game(state: GameState = initialState, action: GameAction): GameState {
  switch(action.type) {
    case ActionTypes.GAME_PLAYER_PICKED_CARD: {
      return {
        ...state,
        playerPlayedCard: action.card,
        playerCards: state.playerCards.filter(card => 
          card.suit !== action.card.suit ||
          card.rank !== action.card.rank
        )
      };      
    }
    case ActionTypes.GAME_FELLOWPLAYER_PICKED_CARD: {
      return {
        ...state,
        fellowPlayerPlayedCard: action.card,
        fellowPlayerCards: --state.fellowPlayerCards
      };
    }
    case ActionTypes.GAME_OPPONENT1_PICKED_CARD: {
      return {
        ...state,
        opponent1PlayedCard: action.card,
        opponent1Cards: --state.opponent1Cards
      };
    }
    case ActionTypes.GAME_OPPONENT2_PICKED_CARD: {
      return {
        ...state,
        opponent2PlayedCard: action.card,
        opponent2Cards: --state.opponent2Cards
      };
    }
    default:
      return state;
  }
}
