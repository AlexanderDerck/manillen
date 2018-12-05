import React from 'react';
import { Button, Icon } from '@material-ui/core';
import styles from './LoginButton.module.scss';

export interface LoginButtonProps { };

export const LoginButton: React.SFC<LoginButtonProps> = () => (
  <Button color="inherit">
    <Icon color="inherit" className={`${styles.iconFacebook} fab fa-facebook`} fontSize="small" />
    Login
  </Button> 
);

function renderSmallButton() {
  return (
    <div 
      className="fb-login-button" 
      data-max-rows="1" 
      data-size="small" 
      data-button-type="login_with" 
      data-show-faces="false" 
      data-auto-logout-link="true" 
      data-use-continue-as="false">
    </div>
  );
}

function renderMediumButton() {
  return (
    <div className="fb-login-button" 
      data-max-rows="1" 
      data-size="medium" 
      data-button-type="login_with" 
      data-show-faces="false" 
      data-auto-logout-link="false" 
      data-use-continue-as="false">
    </div>
  );
}