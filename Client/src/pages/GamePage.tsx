import React from 'react';
import { Column, FullScreen, Row } from '../components';
import { GameContainer } from '../containers/GameContainer';
import styles from './GamePage.module.scss';

export const GamePage = () => (
  <FullScreen>
    <Row justify="center" className={styles.fullHeight}>
      <Column lg={6} xs={12} className={styles.gameContainer}>
        <GameContainer />
      </Column>
    </Row>
  </FullScreen>
);
