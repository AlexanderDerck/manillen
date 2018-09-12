import React from 'react';
import { CardSvgUse } from './CardSvgUse';

import styles from './Card.module.scss';
import { Card as CardData } from '../../models/card';

const Card = props => {
  const cardData = props.card || new CardData(props.rank, props.suit);

  return (
    <div className={styles.container}>
      <svg viewBox='0 0 169 244' className={styles.card}>
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

export { Card }

function checkPropType(props, propName, componentName) {

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