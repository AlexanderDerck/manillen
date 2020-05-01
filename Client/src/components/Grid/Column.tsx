import React from 'react';
import { Grid } from '@material-ui/core';
import { GridProps } from '@material-ui/core/Grid';

export interface ColumnProps extends GridProps { };

const Column: React.SFC<ColumnProps> = ({ item, container, ...injectedProps }) => (
  <Grid item {...injectedProps}>
    {injectedProps.children}
  </Grid>
);

export { Column };
