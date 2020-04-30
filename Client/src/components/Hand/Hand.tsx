import React from 'react';
import { CardSvgUse } from '../Card/svg/CardSvgUse';

import styles from './Hand.module.scss';
import { StateProps, DispatchProps } from '../../containers/HandContainer';

export interface HandProps extends StateProps, DispatchProps {
  maxAmountOfCards?: number
};

const Hand: React.SFC<HandProps> = ({ cards, maxAmountOfCards = 8, pickCard }) => {

  // The ViewBox width of a single card
  const cardViewBoxWidth = 169;
  const cardComponents = cards.map((card, index) => 
    <CardSvgUse 
      key={`${card.suit}_${card.rank}`} 
      card={card} 
      x={index * cardViewBoxWidth / 2} 
      className={styles.cardHover} 
      onClick={() => pickCard(card)}
    />
  );
  const amountOfCards = cards.length;
  /* The remaining amount of cards need to be in the middle of the wrapper div. To 
    * accomplish that, move x coordinate by amount of cards that are gone * 1/4 viewbox 
    * width of a card (n * 'half a card' gone and there needs to be space on other 
    * side as well -> divide by 2 * 2! */
  const xCoordinate = (maxAmountOfCards - amountOfCards) * cardViewBoxWidth / 4;
  /* Full viewbox = 8x card, but all but one card are half covered
    * by the others, so subtract (n-1) times half card width */ 
  const viewBoxWidth = maxAmountOfCards * cardViewBoxWidth - ((maxAmountOfCards - 1) / 2 * cardViewBoxWidth);
  const viewBoxHeight = 244;
  const paddingBottomPercent = viewBoxHeight / viewBoxWidth * 100;
  
  return (
    <div className={styles.container} style={{paddingBottom: `${paddingBottomPercent}%`}}>
      <svg viewBox={`-${xCoordinate} 0 ${viewBoxWidth} ${viewBoxHeight}`} className={styles.hand}>
        {cardComponents}
      </svg>
    </div>
  );
};

export { Hand };
