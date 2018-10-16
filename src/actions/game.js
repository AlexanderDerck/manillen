import types from '../constants/actionTypes';

export const playerPickedCard = card => ({
  type: types.GAME_PLAYER_PICKED_CARD,
  card
});

export const fellowPlayerPickedCard = () => ({
  type: types.GAME_FELLOWPLAYER_PICKED_CARD
})

export const opponent1PickedCard = () => ({
  type: types.GAME_OPPONENT1_PICKED_CARD
});

export const opponent2PickedCard = () => ({
  type: types.GAME_OPPONENT2_PICKED_CARD
});