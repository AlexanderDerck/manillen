import React from 'react';
import { Column, FullScreen, Row } from '../../components';
import { GameContainer } from '../../containers/GameContainer';
import styles from './GamePage.module.scss';

export const GamePage = () => (
  <FullScreen>
    <Row justify="center" className="h-100 py-md-3">
      <Column lg={8} xs={12} className={styles.gameContainer}>
        <GameContainer />
      </Column>
    </Row>
  </FullScreen>
);
