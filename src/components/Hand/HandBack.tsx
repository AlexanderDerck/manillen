import React from 'react';
import { HorizontalHandBack } from './Back/HorizontalHandBack';
import { VerticalHandBack } from './Back/VerticalHandBack';

export interface HandBackProps {
  amountOfCards: number,
  maxAmountOfCards: number,
  vertical?: boolean
};

const HandBack: React.SFC<HandBackProps> = ({ vertical = false, ...props }) => vertical 
? <VerticalHandBack {...props} />
: <HorizontalHandBack {...props} />;

export { HandBack };
