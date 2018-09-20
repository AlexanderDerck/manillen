import React from 'react';
import PropTypes from 'prop-types';
import { HorizontalOpponentHand } from './HorizontalOpponentHand';
import { VerticalOpponentHand } from './VerticalOpponentHand';

const OpponentHand = ({ horizontal, vertical, ...props }) => {
  if(horizontal && vertical) {
    throw new Error("Can't specify both horizontal and vertical on OpponentHand");
  }

  // So if none is specified, horizontal is the default
  return vertical 
    ? <VerticalOpponentHand {...props} />
    : <HorizontalOpponentHand {...props} />;
}

OpponentHand.propTypes = {
  amountOfCards: PropTypes.number,
  horizontal: PropTypes.bool,
  maxAmountOfCards: PropTypes.number,
  vertical: PropTypes.bool
};

OpponentHand.defaultProps = {
  amountOfCards: 8,
  horizontal: false,
  maxAmountOfCards: 8,
  vertical: false
};

export { OpponentHand };