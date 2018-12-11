import React from 'react';
import { GameContainer } from '../containers/GameContainer';
import { FullScreen, Row, Column } from '../components/_common';
import styles from './GamePage.module.scss';

export const GamePage = () => (
  <FullScreen>
    <Row justify="flex-end" className={styles.fullHeight}>
      <Column lg={6} xs={12} className={styles.gameContainer}>
        <GameContainer />
      </Column>
      <Column lg={3} xs={12} className={styles.chatContainer} style={{ backgroundColor: 'red'}}>
        <div >
        </div>
      </Column>
    </Row>


  </FullScreen>
);
