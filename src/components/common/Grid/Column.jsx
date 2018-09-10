import React from 'react';
import { Grid } from '@material-ui/core';

const Column = ({ item, container, ...injectedProps }) => (
  <Grid item {...injectedProps}>
    {injectedProps.children}
  </Grid>
);

export { Column };