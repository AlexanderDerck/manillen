import { Store } from "redux";
import { loginSuccess } from "../actions";

interface Window {
  FB: fb.FacebookStatic,
  fbAsyncInit: () => void
};
declare const window: Window;

export function initializeFacebookSdk(store: Store): void {

  /* Asynchronous flow: if the global 'FB' variable is still undefined,
     then the facebook script hasn't loaded yet, in that case, provide
     a global callback that will be called by the facebook code. If the 
     variable is already present, just call the code right away and forget
     about the callback. */
  if(window.FB === undefined) {
    console.log('FB undefined -> provide callback');
    window.fbAsyncInit = function() {
      initialize();
    };
  }
  else {
    console.log('FB defined -> call init right away');
    initialize();
  }

  function initialize() {

    /**
     * Setting status = true makes sure that the sdk checks for login status and give the 
     * response to the 'auth.statusChange' event, just as if you'd manually call
     * FB.getLoginStatus
     * See: https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus
     */
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
  }
}
