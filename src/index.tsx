import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store: any = configureStore();

ReactDOM.render( 
  <App store={store} />, 
  document.getElementById('root')
);
registerServiceWorker();
