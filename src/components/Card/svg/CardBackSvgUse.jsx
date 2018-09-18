import React from 'react';
import PropTypes from 'prop-types';

import cardSvg from 'assets/svg-cards.svg';

const CardBackSvgUse = ({ x, y, rotate }) => (
  <use x={x} y={y} xlinkHref={`${cardSvg}#back`} fill="#e81010" transform={`rotate(${rotate})`}/>
);

CardBackSvgUse.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  rotate: PropTypes.number
};

CardBackSvgUse.defaultProps = {
  x: 0,
  y: 0,
  rotate: 0
};

export { CardBackSvgUse };