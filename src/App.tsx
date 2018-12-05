import React, { Component } from 'react';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import muiTheme from './muiTheme';
import { GameContainer } from './containers/GameContainer';
import { HeaderContainer } from './containers/HeaderContainer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={muiTheme}>
          <HeaderContainer />  

          <div style={{width: 800, height: 800, margin: 20}}>
            <GameContainer />
          </div>

        </MuiThemeProvider>
      </React.Fragment>

    );
  }
}

export default App;
