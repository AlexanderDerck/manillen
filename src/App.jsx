import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { Header } from './components/Header';
import muiTheme from './muiTheme';
import { Hand } from './components/Hand';
import { Card } from './components/Card';
import { Suit, Rank } from './models/card';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <Header />  
        <div style={{width: 1000, margin: 20, border: '3px solid red'}}>
          <Hand maxAmountCards={20}/>
        </div> 
        <div style={{width: 200, margin: 20, border: '3px solid red'}}>
          <Card suit={Suit.Hearts} rank={Rank.Jack} />
        </div> 
        <div style={{width: 1000, margin: 20, border: '3px solid red'}}>
          <Hand maxAmountCards={8}/>
        </div> 
      </MuiThemeProvider>
    );
  }
}

export default App;
