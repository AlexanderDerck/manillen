import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'models/card';
import { Suits } from 'constants/card';

import cardSvg from 'assets/svg-cards.svg';

// Ranks as used in 'cardSvg' mapped from 'CardRank'
const SvgCardRank = Object.freeze({
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: '10',
  11: 'jack',
  12: 'queen',
  13: 'king'
});

// Suits as used in 'cardSvg' mapped from 'CardSuit'
const SvgCardSuit = Object.freeze({
  Heart: 'heart',
  Spade: 'spade',
  Diamond: 'diamond',
  Club: 'club'
});

const CardSvgUse = ({ card, className, x, y, onClick }) => {
  const { rank, suit } = card;
  const svgRank = SvgCardRank[rank];
  const svgSuit = SvgCardSuit[suit];
  const xlinkHref = `${cardSvg}#${svgRank}_${svgSuit}`;
  const fillColor = getFillColor(suit);

  return (
    <use x={x} y={y} xlinkHref={xlinkHref} fill={fillColor} className={className} onClick={onClick} />
  );
};

CardSvgUse.propTypes = {
  card: PropTypes.instanceOf(Card).isRequired,
  className: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  onClick: PropTypes.func
};

CardSvgUse.defaultProps = {
  className: '',
  x: 0,
  y: 0,
  onclick: () => {}
};

export { CardSvgUse }

function getFillColor(suit) {
  if(suit === Suits.Diamonds || suit === Suits.Hearts) {
    return 'red';
  }

  if(suit === Suits.Clubs || suit === Suits.Spades) {
    return 'black';
  }

  throw new Error('Invalid suit type!');
}