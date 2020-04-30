import React from 'react';
import styles from './FullScreen.module.scss';

export interface FullScreenProps { };

export const FullScreen: React.SFC<FullScreenProps> = ({ children }) => (
  <div className={styles.fullScreenContainer}>
    {children}
  </div>
);
