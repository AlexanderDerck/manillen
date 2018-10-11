import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { Header } from './components/Header';
import muiTheme from './muiTheme';
import { GameField } from './components/GameField';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <Header />  

        <div style={{width: 800, height: 800, margin: 20}}>
          <GameField fellowPlayerCards={8} opponent1Cards={8} opponent2Cards={8}></GameField>
        </div>

      </MuiThemeProvider>
    );
  }
}

export default App;
