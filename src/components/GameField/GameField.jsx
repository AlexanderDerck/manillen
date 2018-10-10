import React from 'react';
import PropTypes from 'prop-types';
import { Hidden } from '@material-ui/core';
import { Column, Row } from '../_common/Grid';
import { Hand, OpponentHand } from '../Hand';
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
            <OpponentHand vertical amountOfCards={opponent1Cards} maxAmountOfCards={8}></OpponentHand>
          </div>         
        </Column>
      </Row>

      {/* Player row */}
      <Row className={styles.bottomRowHeight}>      
        <Column lg={6}>
        <div className={styles.horizontalHandContainer}>
          <Hand maxAmountOfCards={8} />
        </div>         
        </Column>
      </Row>
    </div>
  );
};

GameField.propTypes = {
  fellowPlayerCards: PropTypes.number,
  opponent1Cards: PropTypes.number,
  opponent2Cards: PropTypes.number
};

GameField.defaultProps = {
  fellowPlayerCards: 8,
  opponent1Cards: 8,
  opponent2Cards: 8
};

export { GameField };