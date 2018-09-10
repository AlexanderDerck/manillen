import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';

const Header = () => (
  <AppBar position='static'>
    <Toolbar>
      <Typography variant="title" color="inherit">
        Manillen
      </Typography>
    </Toolbar>
  </AppBar>
);

export { Header };