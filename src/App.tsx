import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { Header } from './components/Header';
import muiTheme from './muiTheme';
import { GameFieldContainer } from './containers/GameFieldContainer';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <Header />  

        <div style={{width: 800, height: 800, margin: 20}}>
          <GameFieldContainer />
        </div>

      </MuiThemeProvider>
    );
  }
}

export default App;
