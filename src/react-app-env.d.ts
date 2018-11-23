/// <reference types="react-scripts" />

type ResponseCallback = (response: FacebookResponse) => void;
type AuthResponseCallback = (response: AuthResponse) => void;

type FacebookSDK = {
  init: () => void;
  api: (url: string, callback: AuthResponseCallback) => void;
  ui: () => void;
  getLoginStatus: () => void;
  login: (callBack: ResponseCallback) => void;
  logout: () => void;
  getAuthRespone: () => void;
};

type AuthResponse = {
  accessToken: string;
  expiresIn: string;
  signedRequest: string;
  userID: string;
};

type FacebookResponse = {
  status: string;
  authResponse: AuthResponse;
};
