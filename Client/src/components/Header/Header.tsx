import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Routes } from '../../constants';
import { DispatchProps, StateProps } from '../../containers/HeaderContainer';
import { User } from '../../models';
import { LoginButton } from '../LoginButton/LoginButton';
import { ProfileButton } from '../ProfileButton/ProfileButton';
import styles from './Header.module.scss';

export interface HeaderProps extends StateProps, DispatchProps { };

export const Header: React.SFC<HeaderProps> = ({ isAuthenticated, user, login, logout }) => (
  <AppBar position="absolute">
    <Toolbar className={styles.container}>
      <div>
        <Link to={Routes.Home}>
          <Typography variant="h4" color="inherit">
            Manillen
          </Typography>
        </Link>
      </div>
      <div>
        { !isAuthenticated && (
          <LoginButton login={login} /> 
        )}
        { isAuthenticated && renderProfileButton(user as User, logout)}
      </div>
    </Toolbar>
  </AppBar>
);

function renderProfileButton(user: User, logout: Function) {
  if(user) {
    return <ProfileButton user={user} logout={logout} />;
  }
}
