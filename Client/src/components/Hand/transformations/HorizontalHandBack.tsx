import React from 'react';
import { CardBackSvgUse } from '../../Card/svg/CardBackSvgUse';
import styles from '../HandBack.module.scss';

export interface HorizontalHandBackProps {
  amountOfCards?: number,
  maxAmountOfCards?: number
};

const HorizontalHandBack: React.SFC<HorizontalHandBackProps> = ({ amountOfCards = 8, maxAmountOfCards = 8 }) => {

    // The default ViewBox of an svg card
    const cardViewBoxWidth = 169;
    const cardViewBoxHeight = 244;
    const cardComponents = new Array(amountOfCards)
      .fill(null)
      .map((_, index) => 
        <CardBackSvgUse key={index} x={index * cardViewBoxWidth / 2} />
      );
    /* The remaining amount of cards need to be in the middle of the wrapper div. To 
      * accomplish that, move x coordinate by amount of cards that are gone * 1/4 viewbox 
      * width of a card (n * 'half a card' gone and there needs to be space on other 
      * side as well -> divide by 2 * 2! */
    const xCoordinate = (maxAmountOfCards - amountOfCards) * cardViewBoxWidth / 4;
    /* Full viewbox = 8x card, but all but one card are half covered
      * by the others, so subtract (n-1) times half card width */ 
    const viewBoxWidth = maxAmountOfCards * cardViewBoxWidth - ((maxAmountOfCards - 1) / 2 * cardViewBoxWidth);
    const viewBoxHeight = cardViewBoxHeight;
    const paddingBottomPercent = viewBoxHeight / viewBoxWidth * 100;
    
    return (
      <div className={styles.container} style={{paddingBottom: `${paddingBottomPercent}%`}}>
        <svg viewBox={`-${xCoordinate} 0 ${viewBoxWidth} ${viewBoxHeight}`} className={styles.unSelectable}>
          {cardComponents}
        </svg>
      </div>
    );
};

export { HorizontalHandBack };
