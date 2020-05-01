import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { PrivateRouteProps } from '../../containers/PrivateRouteContainer';

export const PrivateRoute: React.StatelessComponent<PrivateRouteProps> = ({
  children,
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={({ location }) =>
      isAuthenticated ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/authenticate',
            state: { from: location },
          }}
        />
      )
    }
  />
);