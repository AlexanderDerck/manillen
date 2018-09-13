import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { Header } from './components/Header';
import muiTheme from './muiTheme';
import { Hand, OpponentHand } from './components/Hand';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <Header />  
        <div style={{width: 1000, margin: 20, border: '3px solid red'}}>
          <Hand maxAmountOfCards={8} />
        </div> 
        <div style={{width: 1000, margin: 20, border: '3px solid red'}}>
          <OpponentHand amountOfCards={8} maxAmountOfCards={8} />
        </div> 
      </MuiThemeProvider>
    );
  }
}

export default App;
