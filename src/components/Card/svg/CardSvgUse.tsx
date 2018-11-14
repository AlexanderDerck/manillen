import React from 'react';
import { Card } from '../../../models';
import { Suits, Ranks } from '../../../constants';

import cardSvg from '../../../assets/svg-cards.svg';

export interface CardSvgUseProps {
  card: Card,
  className?: string,
  x?: number,
  y?: number,
  onClick?: () => void
};

const CardSvgUse: React.SFC<CardSvgUseProps> = ({ card, className = '', x = 0, y = 0, onClick = () => {} }) => {
  const svgRank = getSvgCardRank(card.rank);
  const svgSuit = getSvgCardSuit(card.suit);
  const xlinkHref = `${cardSvg}#${svgRank}_${svgSuit}`;
  const fillColor = getFillColor(card.suit);

  return (
    <use x={x} y={y} xlinkHref={xlinkHref} fill={fillColor} className={className} onClick={onClick} />
  );
};

export { CardSvgUse }

/**
 * Suits as used in 'cardSvg' mapped from 'CardSuit'
 */
function getSvgCardSuit(suit: Suits) {
  switch(suit) {
    case Suits.Hearts: return 'heart';
    case Suits.Spades: return 'spade';
    case Suits.Diamonds: return 'diamond';
    case Suits.Clubs: return 'club';
  }
}

/**
 * Ranks as used in 'cardSvg' mapped from 'CardRank'
 */
function getSvgCardRank(rank: Ranks) {
  switch(rank) {
    case Ranks.Ace: return '1';
    case Ranks.Two: return '2';
    case Ranks.Three: return '3';
    case Ranks.Four: return '4';
    case Ranks.Five: return '5';
    case Ranks.Six: return '6';
    case Ranks.Seven: return '7';
    case Ranks.Eight: return '8';
    case Ranks.Nine: return '9';
    case Ranks.Ten: return '10';
    case Ranks.Jack: return 'jack';
    case Ranks.Queen: return 'queen';
    case Ranks.King: return 'king';
  }
}

function getFillColor(suit: Suits) {
  switch(suit) {
    case Suits.Diamonds:
    case Suits.Hearts:
      return 'red';
    case Suits.Clubs:
    case Suits.Spades:
      return 'black';
  }
}