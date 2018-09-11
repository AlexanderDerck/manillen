import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '../Card';

import styles from './Hand.module.scss';

const Hand = props => {
 
  const flexBasis = 100 / props.handSize;   // Flex basis = 100% / initial amount of cards in this hand 
  const children = props.children || [];    // Not required to pass any cards at all!
  const percentToOverlap = 50;              // The percentage adjucant cards will overlap
  /* Align all cards towards center by moving them all right based on current 
   * amount of children - 1 because first child is not translated! */
  const translateX_AlignCenter = (children.length - 1) * (percentToOverlap / 2);   

  const cards = children.map((card, index) => {
    
    const translateX_Overlap = -percentToOverlap * index;                       
    const translateX = translateX_Overlap + translateX_AlignCenter;    

    return (
      <div className={styles.item} style={{ flexBasis: `${flexBasis}%`, transform: `translate3d(${translateX}%, 0, 0)` }}>
        <div className={styles.transitionHover}>
          {card}
        </div>     
      </div>
    );
  });

  return (
    <div className={styles.container}>
      {cards}
    </div>
  );
};

Hand.propTypes = {
  children: PropTypes
    .oneOfType([
      PropTypes.arrayOf(PropTypes.instanceOf(Card)),
      PropTypes.instanceOf(Card)
    ]),
  handSize: PropTypes.number.isRequired
}

export { Hand };