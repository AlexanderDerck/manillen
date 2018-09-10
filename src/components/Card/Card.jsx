import React from 'react';
import cardSvg from '../../assets/svg-cards.svg';
import styles from './Card.module.scss';

const Card = props => {
  const cardNumber = 1;
  const cardType = 'queen';

  return (
    <div className={styles.container}>
      <svg viewBox='0 0 169 244' className={styles.card}>
        <use xlinkHref={`${cardSvg}#${cardNumber}_${cardType}`} x='0' y='0' fill="red"/>
      </svg>
    </div>
  );
};

export { Card }