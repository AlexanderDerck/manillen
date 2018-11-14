import { ActionTypes } from '../constants';
import { Card } from '../models';

export type GameAction = 
  PlayerPickedCard |
  FellowPlayerPickedCard |
  Opponent1PickedCard |
  Opponent2PickedCard;
 
export interface PlayerPickedCard {
  type: ActionTypes.GAME_PLAYER_PICKED_CARD,
  card: Card
};
export const playerPickedCard = (card: Card): PlayerPickedCard => ({
  type: ActionTypes.GAME_PLAYER_PICKED_CARD,
  card
});

export interface FellowPlayerPickedCard {
  type: ActionTypes.GAME_FELLOWPLAYER_PICKED_CARD
};
export const fellowPlayerPickedCard = (): FellowPlayerPickedCard => ({
  type: ActionTypes.GAME_FELLOWPLAYER_PICKED_CARD
});

export interface Opponent1PickedCard {
  type: ActionTypes.GAME_OPPONENT1_PICKED_CARD
};
export const opponent1PickedCard = (): Opponent1PickedCard => ({
  type: ActionTypes.GAME_OPPONENT1_PICKED_CARD
});

export interface Opponent2PickedCard {
  type: ActionTypes.GAME_OPPONENT2_PICKED_CARD
};
export const opponent2PickedCard = (): Opponent2PickedCard => ({
  type: ActionTypes.GAME_OPPONENT2_PICKED_CARD
});