import React from 'react';
import { Grid } from '@material-ui/core';
import { GridProps } from '@material-ui/core/Grid';

export interface RowProps extends GridProps { };

const Row: React.SFC<RowProps> = ({ item, container, justify='center', alignItems='center', ...injectedProps }) => {
  return (
    <Grid 
      container 
      justify={justify}
      alignItems={alignItems}
      {...injectedProps}
    >
      {injectedProps.children}
    </Grid>
  );
};

export { Row };
