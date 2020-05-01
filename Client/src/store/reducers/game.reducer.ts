import {
    fellowPlayerPickedCard, GameAction, opponent1PickedCard, opponent2PickedCard, playerPickedCard
} from '../actions';
import { GameState, initialGameState } from '../state/game.state';

export function gameReducer(state: GameState = initialGameState, action: GameAction): GameState {
  switch(action.type) {
    case playerPickedCard.type: {
      return {
        ...state,
        playerPlayedCard: action.payload.card,
        playerCards: state.playerCards.filter(card => 
          card.suit !== action.payload.card.suit 
          || card.rank !== action.payload.card.rank
        )
      };      
    }
    case fellowPlayerPickedCard.type: {
      return {
        ...state,
        fellowPlayerPlayedCard: action.payload.card,
        fellowPlayerCards: --state.fellowPlayerCards
      };
    }
    case opponent1PickedCard.type: {
      return {
        ...state,
        opponent1PlayedCard: action.payload.card,
        opponent1Cards: --state.opponent1Cards
      };
    }
    case opponent2PickedCard.type: {
      return {
        ...state,
        opponent2PlayedCard: action.payload.card,
        opponent2Cards: --state.opponent2Cards
      };
    }
    default:
      return state;
  }
}
