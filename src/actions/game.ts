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
  type: ActionTypes.GAME_FELLOWPLAYER_PICKED_CARD,
  card: Card
};
export const fellowPlayerPickedCard = (card: Card): FellowPlayerPickedCard => ({
  type: ActionTypes.GAME_FELLOWPLAYER_PICKED_CARD,
  card
});

export interface Opponent1PickedCard {
  type: ActionTypes.GAME_OPPONENT1_PICKED_CARD,
  card: Card
};
export const opponent1PickedCard = (card: Card): Opponent1PickedCard => ({
  type: ActionTypes.GAME_OPPONENT1_PICKED_CARD,
  card
});

export interface Opponent2PickedCard {
  type: ActionTypes.GAME_OPPONENT2_PICKED_CARD,
  card: Card
};
export const opponent2PickedCard = (card: Card): Opponent2PickedCard => ({
  type: ActionTypes.GAME_OPPONENT2_PICKED_CARD,
  card
});