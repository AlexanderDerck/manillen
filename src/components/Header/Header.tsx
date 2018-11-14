import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';

import styles from './Header.module.scss';

const Header = () => (
  <AppBar position='static'>
    <Toolbar>
      <div className={styles.container}>
        <Typography variant="title" color="inherit">
          Manillen
        </Typography>
      </div>
    </Toolbar>
  </AppBar>
);

export { Header };
