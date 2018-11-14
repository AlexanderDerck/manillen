import React from 'react';
import { HandContainer } from '../../containers/HandContainer';
import { Column, Row } from '../_common/Grid';
import { HandBack } from '../Hand';
import { StateProps } from '../../containers/GameFieldContainer';
import styles from './GameField.module.scss';

export interface GameFieldProps extends StateProps { };

const GameField: React.SFC<GameFieldProps> = ({ fellowPlayerCards, opponent1Cards, opponent2Cards }) => {
  return (
    <div className={styles.container}>

      {/* Horizontal opponent row */}
      <Row className={styles.topRowHeight}>
        <Column lg={6}>
          <div className={styles.horizontalHandContainer}>
            <HandBack amountOfCards={fellowPlayerCards} maxAmountOfCards={8}></HandBack>
          </div>          
        </Column>
      </Row>

      {/* Gamefield + vertical opponents */}
      <Row className={styles.middleRowHeight}>
        <Column lg={3}>
          <div className={styles.verticalHandContainer}>
            <HandBack vertical amountOfCards={opponent1Cards} maxAmountOfCards={8}></HandBack>
          </div>         
        </Column>
        
        <Column lg={6}>
        
        </Column>
        
        <Column lg={3}>
          <div className={styles.verticalHandContainer}>
            <HandBack vertical amountOfCards={opponent2Cards} maxAmountOfCards={8}></HandBack>
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

export { GameField };
