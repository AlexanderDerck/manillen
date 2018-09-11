import React from 'react';
import PropTypes from 'prop-types';
import { CardRank } from './CardRank';
import { CardSuit } from './CardSuit';

import cardSvg from '../../assets/svg-cards.svg';
import styles from './Card.module.scss';

const Card = props => {
  const fillColor = getFillColor(props.suit);

  return (
    <div className={styles.container}>
      <svg viewBox='0 0 169 244' className={styles.card}>
        <use xlinkHref={`${cardSvg}#${props.rank}_${props.suit}`} x='0' y='0' fill={fillColor}/>
      </svg>
    </div>
  );
};

const ranks = Object.keys(CardRank).map(propName => CardRank[propName]);
const suits = Object.keys(CardSuit).map(propName => CardSuit[propName]);

Card.propTypes = {
  rank: PropTypes.oneOf(ranks).isRequired,
  suit: PropTypes.oneOf(suits).isRequired
};

export { Card }

function getFillColor(suit) {
  if(suit === CardSuit.Diamonds || suit === CardSuit.Hearts) {
    return 'red';
  }

  if(suit === CardSuit.Clubs || suit === CardSuit.Spades) {
    return 'black';
  }

  throw new Error('Invalid suit type!');
}