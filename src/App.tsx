import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route } from 'react-router-dom';
import muiTheme from './muiTheme';
import { Header } from './components/Header';
import { Game, Home, Login } from './pages';
import { Store } from 'redux';
import { Provider } from 'react-redux';

export interface AppProps {
  store: Store
};

export const App: React.SFC<AppProps> = ({ store }) => (
  <Provider store={store}>
    <MuiThemeProvider theme={muiTheme}>
      <BrowserRouter>
        <div>
          <Header />  

          <Route path="/" exact component={Home} />
          <Route path="/game" component={Game} />
          <Route path="/login" component={Login} />
        </div>
      </BrowserRouter>  
    </MuiThemeProvider>
  </Provider>
);
