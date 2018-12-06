import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';

import styles from './Header.module.scss';
import { LoginButton } from '../LoginButton/LoginButton';
import { StateProps, DispatchProps } from '../../containers/HeaderContainer';

export interface HeaderProps extends StateProps, DispatchProps { };

export const Header: React.SFC<HeaderProps> = ({ isAuthenticated, login }) => (
  <AppBar position='static'>
    <Toolbar className={styles.container}>
      <div>
        <Typography variant="title" color="inherit">
          Manillen
        </Typography>
      </div>
      <div>
        { !isAuthenticated && (
          <LoginButton login={login} /> 
        )}
      </div>
    </Toolbar>
  </AppBar>
);
