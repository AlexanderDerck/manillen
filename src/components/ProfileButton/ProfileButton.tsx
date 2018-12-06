import React from 'react';
import { Avatar, Button, Typography } from '@material-ui/core';
import { User } from '../../models/User';
import styles from './ProfileButton.module.scss';

export interface ProfileButtonProps {
  user: User
};

export const ProfileButton: React.SFC<ProfileButtonProps> = ({ user }) => {
  const initials = `${user.firstName[0]}${user.lastName[0]}`;

  return (
    <Button color="inherit">
      <Avatar className={styles.avatar}>{initials}</Avatar>
      {`${user.firstName} ${user.lastName}`}
    </Button> 
  );
}
