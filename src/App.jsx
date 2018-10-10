import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { Header } from './components/Header';
import muiTheme from './muiTheme';
import { OpponentHand } from './components/Hand';
import { GameField } from './components/GameField';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <Header />  

        <div style={{width: 800, height: 800, margin: 20}}>
          <GameField></GameField>
        </div>

      </MuiThemeProvider>
    );
  }
}

export default App;
