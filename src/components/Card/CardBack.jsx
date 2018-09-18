import React from 'react';
import PropTypes from 'prop-types';
import { CardBackSvgUse } from './svg/CardBackSvgUse';

import styles from './CardBack.module.scss';

const CardBack = ({ horizontal }) => {
  // The natural dimensions of the cards I use (when vertical) have ViewBoxWidth 169 and ViewBoxHeight 244
  const normalViewBoxWidth = 169;
  const normalViewBoxHeight = 244;
  const viewBoxWidth = !horizontal ? normalViewBoxWidth : normalViewBoxHeight;
  const viewBoxHeight = !horizontal ? normalViewBoxHeight : normalViewBoxWidth;
  const paddingBottomPercent = viewBoxHeight / viewBoxWidth * 100;
  const x = 0;
  const y = !horizontal ? 0 : -normalViewBoxHeight;
  const rotate = !horizontal ? 0 : 90;

  return (
    <div className={styles.container} style={{paddingBottom: `${paddingBottomPercent}%`}}>
      <svg viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}>
        <CardBackSvgUse x={x} y={y} rotate={rotate} />
      </svg>
    </div>
  );
};

CardBack.propTypes = {
  horizontal: PropTypes.bool
};

CardBack.defaultProps = {
  horizontal: false
};

export { CardBack };