import React from 'react';
import { StateProps } from '../../containers/GameContainer';
import { HandContainer } from '../../containers/HandContainer';
import { GameField } from '../GameField/GameField';
import { HandBack } from '../Hand';
import styles from './Game.module.scss';

export interface GameProps extends StateProps {}

/**
 * The full game with all the different player hands and gamefield in the middle
 */
export const Game: React.SFC<GameProps> = (props) => {
  return (
    <div className={styles.container}>
      {/* Horizontal opponent row */}
      <div className={`${styles.horizontalOpponentHand} py-1`}>
        <div className={styles.horizontalHandContainer}>
          <HandBack amountOfCards={props.fellowPlayerCards} maxAmountOfCards={8}></HandBack>
        </div>
      </div>

      {/* Gamefield + vertical opponents */}
      <div className={styles.leftVerticalOpponentHand}>
        <div className={styles.verticalHandContainer}>
          <HandBack vertical amountOfCards={props.opponent1Cards} maxAmountOfCards={8}></HandBack>
        </div>
      </div>

      <div className={styles.gameField}>
        <GameField
          playerCard={props.playerPlayedCard}
          fellowPlayerCard={props.fellowPlayerPlayedCard}
          opponent1Card={props.opponent1PlayedCard}
          opponent2Card={props.opponent2PlayedCard}
        />
      </div>

      <div className={styles.rightVerticalOpponentHand}>
        <div className={styles.verticalHandContainer}>
          <HandBack vertical amountOfCards={props.opponent2Cards} maxAmountOfCards={8}></HandBack>
        </div>
      </div>

      {/* Player row */}
      <div className={`${styles.horizontalPlayerHand}`}>
        <div className={styles.horizontalHandContainer}>
          <HandContainer maxAmountOfCards={8} />
        </div>
      </div>
    </div>
  );
};
