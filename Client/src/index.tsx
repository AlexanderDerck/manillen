import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';
import { initializeFacebookSdk } from './services/authentication';
import { store } from './store/store';

initializeFacebookSdk(store as any);

ReactDOM.render( 
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
