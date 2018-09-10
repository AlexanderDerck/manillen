import React from 'react';
import { Grid } from '@material-ui/core';

const Row = ({ container, ...injectedProps }) => (
  <Grid container {...injectedProps}>
    {injectedProps.children}
  </Grid>
);

export { Row }