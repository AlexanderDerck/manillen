import React from 'react';
import PropTypes from 'prop-types';
import { CardSvgUse } from '../Card/svg/CardSvgUse';
import { Card } from 'models/card';
import { Ranks, Suits } from 'constants/card';

import styles from './Hand.module.scss';

class Hand extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cards: new Array(8).fill(new Card(Ranks.Ace, Suits.Spades))
    };
  }

  render() {    
    // The ViewBox width of a single card
    const cardViewBoxWidth = 169;
    const cardComponents = this.state.cards.map((card, index) => 
      <CardSvgUse key={index} card={card} x={index * cardViewBoxWidth / 2} className={styles.cardHover} />
    );
    const amountOfCards = this.state.cards.length;
    const maxAmountOfCards = this.props.maxAmountOfCards;
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
  }
}

Hand.propTypes = {
  maxAmountOfCards: PropTypes.number
};

Hand.defaultProps = {
  maxAmountOfCards: 8
};

export { Hand };