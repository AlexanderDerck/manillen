import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { initializeFacebookSdk } from './services/authentication';
import { getLoginInfoSuccess } from './actions/authentication';
import './index.css';

initializeFacebookSdk();

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
