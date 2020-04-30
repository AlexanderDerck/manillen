import React from 'react';
import { HorizontalHandBack, HorizontalHandBackProps } from './transformations/HorizontalHandBack';
import { VerticalHandBack, VerticalHandBackProps } from './transformations/VerticalHandBack';

export interface HandBackProps extends HorizontalHandBackProps, VerticalHandBackProps {
  vertical?: boolean
};

const HandBack: React.SFC<HandBackProps> = ({ vertical = false, ...props }) => vertical 
? <VerticalHandBack {...props} />
: <HorizontalHandBack {...props} />;

export { HandBack };
