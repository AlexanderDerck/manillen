import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Routes } from '../../constants';
import styles from './Header.module.scss';
import { LoginButton } from '../LoginButton/LoginButton';
import { StateProps, DispatchProps } from '../../containers/HeaderContainer';
import { ProfileButton } from '../ProfileButton/ProfileButton';
import { User } from '../../models/User';

export interface HeaderProps extends StateProps, DispatchProps { };

export const Header: React.SFC<HeaderProps> = ({ isAuthenticated, user, login, logout }) => (
  <AppBar position="absolute">
    <Toolbar className={styles.container}>
      <div>
        <Link to={Routes.Home}>
          <Typography variant="title" color="inherit">
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
