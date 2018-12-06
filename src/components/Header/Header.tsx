import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';

import styles from './Header.module.scss';
import { LoginButton } from '../LoginButton/LoginButton';
import { StateProps, DispatchProps } from '../../containers/HeaderContainer';
import { ProfileButton } from '../ProfileButton/ProfileButton';
import { User } from '../../models/User';

export interface HeaderProps extends StateProps, DispatchProps { };

export const Header: React.SFC<HeaderProps> = ({ isAuthenticated, user, login }) => (
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
        { isAuthenticated && renderProfileButton(user)}
      </div>
    </Toolbar>
  </AppBar>
);

function renderProfileButton(user?: User) {
  if(user) {
    return <ProfileButton user={user} />;
  }
}
