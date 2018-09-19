import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { Header } from './components/Header';
import muiTheme from './muiTheme';
import { OpponentHand, VerticalOpponentHand } from './components/Hand';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <Header />  
        <div style={{width: 200, margin: 20, border: '3px solid red'}}>
          <VerticalOpponentHand amountOfCards={8} maxAmountOfCards={8} />
        </div> 
      </MuiThemeProvider>
    );
  }
}

export default App;
