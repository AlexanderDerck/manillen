import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route } from 'react-router-dom';
import muiTheme from './muiTheme';
import { Header } from './components/Header';
import { Game, Home, Login } from './pages';

export const App = () => (
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
);
