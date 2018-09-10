import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { Header } from './components/Header';
import muiTheme from './muiTheme';
import { Card } from './components/Card/Card';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <Header />
        <div style={{width: 200, height: 100}}>
          <Card />
        </div>       
      </MuiThemeProvider>
    );
  }
}

export default App;
