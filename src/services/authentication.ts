import { Store } from "redux";
import { loginSuccess } from "../actions";

interface Window {
  fbAsyncInit: () => void
};
declare const window: Window;

export function initializeFacebookSdk(store: Store): void {
  /**
   * Setting status = true makes sure that the sdk checks for login status and give the 
   * response to the 'auth.statusChange' event, just as if you'd manually call
   * FB.getLoginStatus
   * See: https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus
   */
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '492331311256888',
      cookie     : true,
      xfbml      : true,
      version    : 'v3.2',
      status     : true   
    });    
    
    let hasBeenTriggered = false;
    FB.Event.subscribe('auth.statusChange', function(response: fb.StatusResponse) {
      /* Stupid api can't subscribe to events just once, workaround to prevent double 
       * authentication flow whenever a status changes */
      if(!hasBeenTriggered) {
        hasBeenTriggered = true;
        store.dispatch(loginSuccess(response));        
      }      
    });
  };
}
