import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { Routes } from './constants/Routes';
import { HeaderContainer } from './containers/HeaderContainer';
import { PrivateRouteContainer } from './containers/PrivateRouteContainer';
import { theme } from './muiTheme';
import { GamePage, ProfilePage } from './pages';

export interface AppProps { };

export const App: React.SFC<AppProps> = () => (
  <React.Fragment>
    <CssBaseline />
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>    
        <HeaderContainer />  

        <Switch>
          <Route path={Routes.Home} exact><GamePage></GamePage></Route>
          <Route path={Routes.Game} exact><GamePage></GamePage></Route>
          <PrivateRouteContainer path={Routes.Profile}><ProfilePage></ProfilePage></PrivateRouteContainer>
        </Switch>
      </MuiThemeProvider>
    </BrowserRouter>
  </React.Fragment>
);
