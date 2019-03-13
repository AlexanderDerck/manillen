export enum ActionTypes {
  // Authentication
  AUTHENTICATION_LOGIN_FACEBOOK = 'AUTHENTICATION_LOGIN_FACEBOOK',
  AUTHENTICATION_LOGIN_FACEBOOK_SUCCESS = 'AUTHENTICATION_LOGIN_FACEBOOK_SUCCESS',
  AUTHENTICATION_LOGIN_FACEBOOK_ERROR = 'AUTHENTICATION_LOGIN_FACEBOOK_ERROR',
  AUTHENTICATION_LOGOUT_FACEBOOK = 'AUTENTICATION_LOGOUT_FACEBOOK',
  AUTHENTICATION_LOGOUT_FACEBOOK_SUCCESS = 'AUTENTICATION_LOGOUT_FACEBOOK_SUCCESS',
  AUTHENTICATION_GET_USER_INFO_FACEBOOK_SUCCESS = 'AUTHENTICATION_GET_USER_INFO_FACEBOOK_SUCCESS',
  AUTHENTICATION_GET_USER_INFO_FACEBOOK_ERROR = 'AUTHENTICATION_GET_USER_INFO_FACEBOOK_ERROR',

  // Game
  GAME_PLAYER_PICKED_CARD = 'GAME_PLAYER_PICKED_CARD',
  GAME_FELLOWPLAYER_PICKED_CARD = 'GAME_FELLOWPLAYER_PICKED_CARD',
  GAME_OPPONENT1_PICKED_CARD = 'GAME_OPPONENT1_PICKED_CARD',
  GAME_OPPONENT2_PICKED_CARD = 'GAME_OPPONENT2_PICKED_CARD'
};
