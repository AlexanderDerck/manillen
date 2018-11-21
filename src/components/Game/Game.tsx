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
      <Row className={styles.topRowHeight}>
        <Column lg={6}>
          <div className={styles.horizontalHandContainer}>
            <HandBack amountOfCards={props.fellowPlayerCards} maxAmountOfCards={8}></HandBack>
          </div>          
        </Column>
      </Row>

      {/* Gamefield + vertical opponents */}
      <Row className={styles.middleRowHeight}>
        <Column lg={3}>
          <div className={styles.verticalHandContainer}>
            <HandBack vertical amountOfCards={props.opponent1Cards} maxAmountOfCards={8}></HandBack>
          </div>         
        </Column>
        
        <Column lg={6} className="height-100">
          <GameField 
            playerCard={props.playerPlayedCard} 
            fellowPlayerCard={props.fellowPlayerPlayedCard} 
            opponent1Card={props.opponent1PlayedCard} 
            opponent2Card={props.opponent2PlayedCard} 
          />
        </Column>
        
        <Column lg={3}>
          <div className={styles.verticalHandContainer}>
            <HandBack vertical amountOfCards={props.opponent2Cards} maxAmountOfCards={8}></HandBack>
          </div>         
        </Column>
      </Row>

      {/* Player row */}
      <Row className={styles.bottomRowHeight}>      
        <Column lg={6}>
        <div>
          <HandContainer maxAmountOfCards={8} />
        </div>         
        </Column>
      </Row>
    </div>
  );
};

export { Game };
