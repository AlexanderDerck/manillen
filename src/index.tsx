import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { getLoginInfoSuccess } from './actions/authentication';
import './index.css';

const store = configureStore();

(window as any).fbAsyncInit = function() {
  FB.init({
    appId      : '492331311256888',
    cookie     : true,
    xfbml      : true,
    version    : 'v3.2'
  });          
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
