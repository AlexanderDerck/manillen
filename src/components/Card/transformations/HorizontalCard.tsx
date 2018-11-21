import React from 'react';
import { CardSvgUse } from '../svg/CardSvgUse';
import { Card as CardData } from '../../../models';
import styles from '../Card.module.scss';

export interface HorizontalCardProps {
  card: CardData
};

const HorizontalCard: React.SFC<HorizontalCardProps> = ({ card }) => {
  const viewBoxWidth = 244;
  const viewBoxHeight = 169;
  const paddingBottomPercent = viewBoxHeight / viewBoxWidth * 100;

  return (
    <div className={styles.container} style={{paddingBottom: `${paddingBottomPercent}%`}}>
      <svg viewBox={`-${viewBoxWidth} 0 ${viewBoxWidth} ${viewBoxHeight}`} className={styles.card}>
        <CardSvgUse card={card} rotate={90}/>
      </svg>
    </div>
  );
};

export { HorizontalCard };
