import React from 'react';

import cardSvg from '../../../assets/svg-cards.svg';

export interface CardBackSvgUseProps {
  x?: number,
  y?: number,
  rotate?: number
};

const CardBackSvgUse: React.SFC<CardBackSvgUseProps> = ({ x = 0, y = 0, rotate = 0 }) => (
  <use x={x} y={y} xlinkHref={`${cardSvg}#back`} fill="#e81010" transform={`rotate(${rotate})`}/>
);

export { CardBackSvgUse };
