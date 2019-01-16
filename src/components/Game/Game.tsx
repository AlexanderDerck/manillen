import React from 'react';
import { HandContainer } from '../../containers/HandContainer';
import { Column, Row } from '../_common/Grid';
import { HandBack } from '../Hand';
import { StateProps } from '../../containers/GameContainer';
import styles from './Game.module.scss';
import { GameField } from '../GameField/GameField';

export interface GameProps extends StateProps { };

/**
 * The full game with all the different player hands and gamefield in the middle
 */
const Game: React.SFC<GameProps> = props => {
  return (
    <div className={styles.container}>

      {/* Horizontal opponent row */}
      <div className={styles.horizontalOpponentHand}>
        <HandBack amountOfCards={props.fellowPlayerCards} maxAmountOfCards={8}></HandBack>  
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
      <div className={styles.horizontalPlayerHand}>
        <HandContainer maxAmountOfCards={8} />    
      </div>
      
      

    </div>
  );
};

export { Game };
