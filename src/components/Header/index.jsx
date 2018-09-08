import React from 'react';
import { AppBar, Typography, Menu, MenuItem, Toolbar } from '@material-ui/core';

export const Header = () => {
  return (
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
}