import React from 'react';
import { Button, Icon } from '@material-ui/core';
import styles from './LoginButton.module.scss';

export interface LoginButtonProps {
  login: Function
};

export const LoginButton: React.SFC<LoginButtonProps> = ({ login }) => (
  <Button color="inherit" onClick={() => login()}>
    <Icon color="inherit" className={`${styles.iconFacebook} fab fa-facebook`} fontSize="small" />
    Login
  </Button> 
);
