import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import muiTheme from './muiTheme';
import { Game, Profile } from './pages';
import { HeaderContainer } from './containers/HeaderContainer';
import { Routes } from './constants/Routes';
import { PrivateRouteContainer } from './containers/PrivateRouteContainer';
import { PrivateRoute } from './components/_common/PrivateRoute';

export interface AppProps { };

export const App: React.SFC<AppProps> = () => (
  <React.Fragment>
    <CssBaseline />
    <BrowserRouter>
      <MuiThemeProvider theme={muiTheme}>    
        <HeaderContainer />  

        <Switch>
          <Route path={Routes.Home} exact component={Game} />
          <Route path={Routes.Game} component={Game} />
          <PrivateRouteContainer path={Routes.Profile} component={Profile} />
        </Switch>
      </MuiThemeProvider>
    </BrowserRouter>
  </React.Fragment>
);
