import React from 'react';

export interface FacebookLoginButtonProps {
  small?: boolean
};

export const FacebookLoginButton: React.SFC<FacebookLoginButtonProps> = ({ small = true }) => small
  ? renderSmallButton()
  : renderLargeButton();

function renderSmallButton() {
  return (
    <div 
      className="fb-login-button" 
      data-max-rows="1" 
      data-size="small" 
      data-button-type="login_with" 
      data-show-faces="false" 
      data-auto-logout-link="false" 
      data-use-continue-as="false">
    </div>
  );
}

function renderLargeButton() {
  return (
    <div 
      className="fb-login-button" 
      data-max-rows="1" 
      data-size="large" 
      data-button-type="continue_with" 
      data-show-faces="false" 
      data-auto-logout-link="false" 
      data-use-continue-as="true">
    </div>
  );
}