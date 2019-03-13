import React from 'react';
import { Avatar, Button, Typography } from '@material-ui/core';
import { User } from '../../models/User';
import styles from './ProfileButton.module.scss';
import { Link } from 'react-router-dom';
import { Routes } from '../../constants';

export interface ProfileButtonProps {
  user: User
};

export const ProfileButton: React.SFC<ProfileButtonProps> = ({ user }) => {
  const initials = `${user.firstName[0]}${user.lastName[0]}`;

  return (
    <Link to={Routes.Profile}>
      <Button color="inherit">
        {createAvatar(user)}
        {`${user.firstName} ${user.lastName}`}
      </Button> 
    </Link>
  );
}

function createAvatar(user: User) {
  if (user.profilePictureUrl) {
    return <Avatar className={styles.avatar} src={user.profilePictureUrl} />;
  } else {
    const initials = `${user.firstName[0]}${user.lastName[0]}`;

    return <Avatar className={styles.avatar}>{initials}</Avatar>;
  }
}
