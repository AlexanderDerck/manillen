import React from 'react';
import { CardSvgUse } from './CardSvgUse';

import styles from './Card.module.scss';

const Card = props => (
  <div className={styles.container}>
    <svg viewBox='0 0 169 244' className={styles.card}>
      <CardSvgUse {...props} />
    </svg>
  </div>
);

export { Card }