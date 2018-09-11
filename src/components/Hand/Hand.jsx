import React from 'react';
import PropTypes from 'prop-types';

import styles from './Hand.module.scss';

const Hand = props => {
 
  // Flex basis = 100% / initial amount of cards in this hand 
  const flexBasis = 100 / props.handSize;   
  // Not required to pass any cards at all!
  const children = [].concat(props.children);    
  // The percentage adjucant cards will overlap
  const percentToOverlap = 50;              
  /* Align all cards towards center by moving them all right based on current 
   * amount of children - 1 because first child is not translated! */
  const translateX_AlignCenter = (children.length - 1) * (percentToOverlap / 2);   

  const cards = children.map((card, index) => {    
    const translateX_Overlap = -percentToOverlap * index;                       
    const translateX = translateX_Overlap + translateX_AlignCenter;    

    return (
      <div key={index} className={styles.item} style={{ flexBasis: `${flexBasis}%`, transform: `translate3d(${translateX}%, 0, 0)` }}>
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]),
  handSize: PropTypes.number.isRequired
};

export { Hand };