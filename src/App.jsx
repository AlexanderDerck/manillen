import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { Header } from './components/Header';
import muiTheme from './muiTheme';
import { OpponentHand } from './components/Hand';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <Header />  
        <div style={{width: 600, margin:20, border: '3px solid red'}}>
          <OpponentHand amountOfCards={6} maxAmountOfCards={8} />
        </div>
        <div style={{width: 200, margin: 20, border: '3px solid red'}}>
          <OpponentHand amountOfCards={6} maxAmountOfCards={8} vertical />
        </div> 
      </MuiThemeProvider>
    );
  }
}

export default App;
