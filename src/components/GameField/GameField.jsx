import React from 'react';
import PropTypes from 'prop-types';
import HandContainer from '../../containers/HandContainer';
import { Column, Row } from '../_common/Grid';
import { OpponentHand } from '../Hand';
import styles from './GameField.module.scss';

const GameField = ({ fellowPlayerCards, opponent1Cards, opponent2Cards }) => {
  return (
    <div className={styles.container}>

      {/* Horizontal opponent row */}
      <Row className={styles.topRowHeight}>
        <Column lg={6}>
          <div className={styles.horizontalHandContainer}>
            <OpponentHand horizontal amountOfCards={fellowPlayerCards} maxAmountOfCards={8}></OpponentHand>
          </div>          
        </Column>
      </Row>

      {/* Gamefield + vertical opponents */}
      <Row className={styles.middleRowHeight}>
        <Column lg={3}>
          <div className={styles.verticalHandContainer}>
            <OpponentHand vertical amountOfCards={opponent1Cards} maxAmountOfCards={8}></OpponentHand>
          </div>         
        </Column>
        
        <Column lg={6}>
        
        </Column>
        
        <Column lg={3}>
          <div className={styles.verticalHandContainer}>
            <OpponentHand vertical amountOfCards={opponent2Cards} maxAmountOfCards={8}></OpponentHand>
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

GameField.propTypes = {
  fellowPlayerCards: PropTypes.number.isRequired,
  opponent1Cards: PropTypes.number.isRequired,
  opponent2Cards: PropTypes.number.isRequired
};

export { GameField };