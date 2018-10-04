import React from 'react';
import PropTypes from 'prop-types';
import { Hidden } from '@material-ui/core';
import { Column, Row } from '../_common/Grid';
import { Hand, OpponentHand } from '../Hand';
import { Card } from 'models/card';
import styles from './GameField.module.scss';

const GameField = ({ playerCards, fellowPlayerCards, opponent1Cards, opponent2Cards }) => {
  return (
    <div className={styles.container}>

      <Row>

        <Hidden lgDown>
          <Column lg={2} style={{backgroundColor: 'red'}}></Column>
        </Hidden>   

        <Column xs={12} lg={8} style={{backgroundColor: 'red'}}>
          <OpponentHand horizontal amountOfCards={8} maxAmountOfCards={8}></OpponentHand>
        </Column>

        <Hidden lgDown>
          <Column lg={2} style={{backgroundColor: 'red'}}></Column>
        </Hidden>        
      </Row>

      <Row>
        <Hidden lgDown>
          <Column lg={2} style={{backgroundColor: 'red'}}>
            <OpponentHand vertical amountOfCards={8} maxAmountOfCards={8}></OpponentHand>
          </Column>
        </Hidden>
        
        <Column xs={12} lg={8} style={{backgroundColor: 'green'}}>
        
        </Column>
        
        <Hidden lgDown>
          <Column lg={2} style={{backgroundColor: 'red'}}>
            <OpponentHand vertical amountOfCards={8} maxAmountOfCards={8}></OpponentHand>
          </Column>
        </Hidden>
      </Row>

      <Row>
        <Hidden lgDown>
          <Column lg={2} style={{backgroundColor: 'red'}}></Column>
        </Hidden>
        
        <Column xs={12} lg={8} style={{backgroundColor: 'red'}}>
          <OpponentHand horizontal amountOfCards={8} maxAmountOfCards={8}></OpponentHand>
        </Column>
        
        <Hidden lgDown>
          <Column lg={2} style={{backgroundColor: 'red'}}></Column>
        </Hidden>
      </Row>
    </div>
  );
};

// GameField.propTypes = {
//   playerCards: PropTypes.arrayOf(Card).isRequired,
//   fellowPlayerCards: PropTypes.number.isRequired,
//   opponent1Cards: PropTypes.number.isRequired,
//   opponent2Cards: PropTypes.number.isRequired
// };

export { GameField };