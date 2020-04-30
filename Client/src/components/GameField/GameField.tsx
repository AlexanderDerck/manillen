import React from 'react';
import { Card } from '../Card';
import { Card as CardModel } from '../../models';
import styles from './GameField.module.scss';

export interface GameFieldProps {
  playerCard?: CardModel,
  fellowPlayerCard?: CardModel,
  oponent1Card?: CardModel,
  opponent2Card?: CardModel
};

export const GameField = ({ playerCard, fellowPlayerCard, opponent1Card, opponent2Card }) => {

  return (
    <div className={styles.container}>

      <div className={styles.row1}>
        <div className={styles.verticalCardContainer}>
          {
            fellowPlayerCard &&
            <Card card={fellowPlayerCard} />
          }
        </div>       
      </div>

      <div className={styles.row2}>
        <div className={styles.horizontalCardContainer}>
          {
            opponent1Card &&
            <Card horizontal card={opponent1Card} />
          }
        </div>
        <div className={styles.horizontalCardContainer}>
          {
            opponent2Card &&
            <Card horizontal card={opponent2Card} />
          }  
        </div>         
      </div>

      <div className={styles.row3}>
        <div className={styles.verticalCardContainer}>
          {
            playerCard && 
            <Card card={playerCard} />
          }
        </div>       
      </div>
           
    </div>
  );
};