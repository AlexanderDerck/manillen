import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Routes } from '../../constants';
import styles from './Header.module.scss';

const Header = () => (
  <AppBar position='static'>
    <Toolbar>
      <div className={styles.container}>
        <Link to={Routes.Home}>
          <Typography variant="title" color="inherit">
            Manillen
          </Typography>
        </Link>
      </div>
    </Toolbar>
  </AppBar>
);

export { Header };
