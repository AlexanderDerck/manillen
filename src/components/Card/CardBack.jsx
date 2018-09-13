import React from 'react';
import { CardBackSvgUse } from './svg/CardBackSvgUse';

import styles from './CardBack.module.scss';

const CardBack = () => {
  const viewBoxWidth = 169;
  const viewBoxHeight = 244;
  const paddingBottomPercent = viewBoxHeight / viewBoxWidth * 100;

  return (
    <div className={styles.container} style={{paddingBottom: `${paddingBottomPercent}%`}}>
      <svg viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}>
        <CardBackSvgUse />
      </svg>
    </div>
  );
};

export { CardBack };