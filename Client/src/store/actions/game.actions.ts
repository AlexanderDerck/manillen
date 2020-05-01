import { createAction } from '@reduxjs/toolkit';
import { Card } from '../../models';
import { actionTypes, props } from '../utils';

export const playerPickedCard = createAction('[Game] Player picked card', props<{ card: Card }>());
export const fellowPlayerPickedCard = createAction('[Game] Fellow player picked card', props<{ card: Card }>());
export const opponent1PickedCard = createAction('[Game] Opponent 1 picked card', props<{ card: Card }>());
export const opponent2PickedCard = createAction('[Game] Opponent 2 picked card', props<{ card: Card }>());

export const gameActionCreatorMap = {
  playerPickedCard,
  fellowPlayerPickedCard,
  opponent1PickedCard,
  opponent2PickedCard
}
const all = actionTypes(gameActionCreatorMap);
export type GameAction = typeof all;