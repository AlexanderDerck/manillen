import React from 'react';
import { CardSvgUse } from './CardSvgUse';

import styles from './Card.module.scss';
import { Card as CardData } from '../../models/card';

const Card = ({card, suit, rank}) => {
  const cardData = card || new CardData(rank, suit);
  const viewBoxWidth = 169;
  const viewBoxHeight = 244;
  const paddingBottomPercent = viewBoxHeight / viewBoxWidth * 100;

  return (
    <div className={styles.container} style={{paddingBottom: `${paddingBottomPercent}%`}}>
      <svg viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} className={styles.card}>
        <CardSvgUse card={cardData} />
      </svg>
    </div>
  );
}

Card.propTypes = {
  card: checkPropType,
  suit: checkPropType,
  rank: checkPropType
};

export { Card };

function checkPropType(props) {

  if(props.card) {
    if((props.rank || props.suit)) {
      return new Error("Can't have both card and rank/suit properties!");
    }
    return;
  }

  if(!(props.rank && props.suit)) {
    return new Error("rank and suit need to be defined!");
  }
}