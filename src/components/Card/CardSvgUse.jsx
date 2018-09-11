import React from 'react';
import PropTypes from 'prop-types';
import { CardRank } from './CardRank';
import { CardSuit } from './CardSuit';

import cardSvg from '../../assets/svg-cards.svg';

const CardSvgUse = props => {
  const fillColor = getFillColor(props.suit);

  return <use xlinkHref={`${cardSvg}#${props.rank}_${props.suit}`} x={props.x} y={props.y} fill={fillColor}/>;
};

const ranks = Object.keys(CardRank).map(propName => CardRank[propName]);
const suits = Object.keys(CardSuit).map(propName => CardSuit[propName]);

CardSvgUse.propTypes = {
  rank: PropTypes.oneOf(ranks).isRequired,
  suit: PropTypes.oneOf(suits).isRequired,
  x: PropTypes.number,
  y: PropTypes.number
};

CardSvgUse.defaultProps = {
  x: 0,
  y: 0
};

export { CardSvgUse }

function getFillColor(suit) {
  if(suit === CardSuit.Diamonds || suit === CardSuit.Hearts) {
    return 'red';
  }

  if(suit === CardSuit.Clubs || suit === CardSuit.Spades) {
    return 'black';
  }

  throw new Error('Invalid suit type!');
}