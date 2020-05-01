import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';
import { initializeFacebookSdk } from './services/authentication';
import configureStore from './store';

const store = configureStore();
initializeFacebookSdk(store);

ReactDOM.render( 
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
