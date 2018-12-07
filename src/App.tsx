import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import muiTheme from './muiTheme';
import { Game, Home, Login } from './pages';
import { HeaderContainer } from './containers/HeaderContainer';

export interface AppProps { };

export const App: React.SFC<AppProps> = () => (
  <React.Fragment>
    <CssBaseline />
    <BrowserRouter>
      <MuiThemeProvider theme={muiTheme}>    
        <HeaderContainer />  

        <Route path="/" exact component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/login" component={Login} />
      </MuiThemeProvider>
    </BrowserRouter>
  </React.Fragment>
);
