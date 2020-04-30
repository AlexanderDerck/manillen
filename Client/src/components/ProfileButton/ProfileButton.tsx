import React, { DOMElement } from 'react';
import { Avatar, Button, Menu, MenuItem } from '@material-ui/core';
import { User } from '../../models/User';
import styles from './ProfileButton.module.scss';
import { Link } from 'react-router-dom';
import { Routes } from '../../constants';

export interface ProfileButtonProps {
  user: User,
  logout: Function
};

export interface ProfileButtonState {
  isMenuOpen: boolean
};

export class ProfileButton extends React.Component<ProfileButtonProps, ProfileButtonState> {
  private buttonRef: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);

    this.buttonRef = React.createRef();
    this.state = { isMenuOpen: false };
  }

  closeMenu = () => {
    this.setState({ isMenuOpen: false });
  }

  toggleMenu = (event: React.MouseEvent) => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  render() {
    const { user, logout } = this.props;
    const { isMenuOpen } = this.state;
    const initials = `${user.firstName[0]}${user.lastName[0]}`;

    return (
      <React.Fragment>
        <Button color="inherit" onClick={this.toggleMenu} buttonRef={this.buttonRef}>
          <Avatar className={styles.avatar} src={user.profilePictureUrl}>
            {initials}
          </Avatar>
          {`${user.firstName} ${user.lastName}`}
        </Button>  
        <Menu open={isMenuOpen} anchorEl={this.buttonRef.current} onClose={this.closeMenu}>
          <MenuItem onClick={this.closeMenu}>           
            <Link to={Routes.Profile}>Profiel</Link>
          </MenuItem>
          <MenuItem onClick={() => logout()}>
            Uitloggen
          </MenuItem>
        </Menu>
      </React.Fragment>
    );
  }
};
