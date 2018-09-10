import React from 'react';
import { Grid } from '@material-ui/core';

const Row = ({ item, container, ...injectedProps }) => {
  return (
    <Grid container {...injectedProps}>
      {injectedProps.children}
    </Grid>
  );
};

export { Row }