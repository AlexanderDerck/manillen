import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';

const Header = () => (
  <div>
    <AppBar position='static'>
      <Toolbar>
        <Typography variant="title" color="inherit">
          Manillen
        </Typography>
      </Toolbar>

    </AppBar>
  </div>
);

export { Header };