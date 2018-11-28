import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';
import { getLoginInfoSuccess } from './actions/authentication';
import './index.css';

const store = configureStore();

FB.getLoginStatus(response => {
  console.log(response);
  const action = getLoginInfoSuccess(response);
  store.dispatch(action);
});

ReactDOM.render( 
  <App store={store} />, 
  document.getElementById('root')
);
registerServiceWorker();
