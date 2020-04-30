import React from 'react';
import { HorizontalCardProps, HorizontalCard } from './transformations/HorizontalCard';
import { VerticalCardProps, VerticalCard } from './transformations/VerticalCard';

export interface CardProps extends HorizontalCardProps, VerticalCardProps {
  horizontal?: boolean
};

export const Card: React.SFC<CardProps> = ({ horizontal = false, ...props }) => horizontal
  ? <HorizontalCard {...props} />
  : <VerticalCard {...props} />;
