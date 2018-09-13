import React from 'react';
import PropTypes from 'prop-types';

import cardSvg from 'assets/svg-cards.svg';

const CardBackSvgUse = ({ x, y }) => (
  <use x={x} y={y} xlinkHref={`${cardSvg}#back`} fill="#e81010" />
);

CardBackSvgUse.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number
};

CardBackSvgUse.defaultProps = {
  x: 0,
  y: 0
};

export { CardBackSvgUse };