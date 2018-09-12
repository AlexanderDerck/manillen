import React from 'react';
import PropTypes from 'prop-types';
import { CardSvgUse } from '../Card/CardSvgUse';
import { Card, Rank, Suit } from '../../models/card';

import styles from './Hand.module.scss';

class Hand extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cards: new Array(8).fill(new Card(Rank.Ace, Suit.Spades))
    };
  }

  render() {    
    // The ViewBox width of a single card
    const cardViewBoxWidth = 169;

    const cardComponents = this.state.cards.map((card, index) => 
      <CardSvgUse key={index} card={card} x={index * cardViewBoxWidth / 2} className={styles.cardHover} />
    );

    const amountOfCards = this.state.cards.length;
    const maxAmountCards = this.props.maxAmountCards;
    /* Move x coordinate by amount of cards that are gone * 1/4 viewbox width 
     * of a card (n * 'half a card' gone and there needs to be space on other 
     * side as well -> divide by 2 * 2! */
    const xCoordinate = (maxAmountCards - amountOfCards) * cardViewBoxWidth / 4;
    /* Full viewbox = 8x card, but all but one card are half covered
     * by the others, so subtract (n-1) times half card width */ 
    const viewBoxWidth = maxAmountCards *cardViewBoxWidth - ((maxAmountCards - 1) / 2 * cardViewBoxWidth);
    const viewBoxHeight = 244;
    const paddingBottomPercent = viewBoxHeight / viewBoxWidth * 100;
    
    return (
      <div className={styles.container} style={{paddingBottom: `${paddingBottomPercent}%`}}>
        <svg viewBox={`-${xCoordinate} 0 ${viewBoxWidth} ${viewBoxHeight}`} overflow="visible">
          {cardComponents}
        </svg>
      </div>
    );
  }
}

Hand.propTypes = {
  maxAmountCards: PropTypes.number
};

Hand.defaultProps = {
  maxAmountCards: 8
};

export { Hand }