import types from '../constants/actionTypes';

export const gameCardClicked = card => ({
  type: types.GAME_PICKED_CARD,
  card
});