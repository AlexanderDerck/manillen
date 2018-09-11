import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { Header } from './components/Header';
import muiTheme from './muiTheme';
import { Hand } from './components/Hand';
import { Card, CardRank, CardSuit } from './components/Card';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <Header />
        <div style={{width: 1000, margin: 20, border: '3px solid red'}}>
          <Hand handSize={8}>
            <Card rank={CardRank.Seven} suit={CardSuit.Hearts} />
            <Card rank={CardRank.Eight} suit={CardSuit.Hearts} />
            <Card rank={CardRank.Nine} suit={CardSuit.Hearts} />
            <Card rank={CardRank.Ten} suit={CardSuit.Hearts} />
            <Card rank={CardRank.Jack} suit={CardSuit.Hearts} />
            <Card rank={CardRank.Queen} suit={CardSuit.Hearts} />
            <Card rank={CardRank.King} suit={CardSuit.Hearts} />
            <Card rank={CardRank.Ace} suit={CardSuit.Hearts} />
          </Hand>
        </div>     
        <div style={{width: 1000, margin: 20, border: '3px solid red'}}>
          <Hand handSize={8}>
            <Card rank={CardRank.Seven} suit={CardSuit.Hearts} />
            <Card rank={CardRank.Eight} suit={CardSuit.Hearts} />
            <Card rank={CardRank.Nine} suit={CardSuit.Hearts} />
            <Card rank={CardRank.Ten} suit={CardSuit.Hearts} />
            <Card rank={CardRank.Jack} suit={CardSuit.Hearts} />
            <Card rank={CardRank.Queen} suit={CardSuit.Hearts} />
          </Hand>
        </div>      
      </MuiThemeProvider>
    );
  }
}

export default App;
