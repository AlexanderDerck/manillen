import React from 'react';
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom';
import { Routes } from '../../../constants';
import { StateProps } from '../../../containers/PrivateRouteContainer';

export interface PrivateRouteProps extends RouteProps, StateProps { };

type RouteComponent = React.StatelessComponent<RouteComponentProps<{}>> | React.ComponentClass<any>

export const PrivateRoute: React.SFC<PrivateRouteProps> = ({ isAuthenticated, component, ...rest}) => (
  <Route {...rest} render={renderRoute(isAuthenticated, component as RouteComponent)} />
);

/**
 * TODO: How the fuck does this work? Copied from this answer:
 * https://stackoverflow.com/a/47441101/3410196
 */
function renderRoute(isAuthenticated: boolean, Component: RouteComponent) {
  return function(props: RouteProps){
    if (isAuthenticated) {
      return <Component {...props} />
    }
  
    const redirectProps = {
      to: {
        pathname: Routes.Home,
        state: {from: props.location},
      },
    }
  
    return <Redirect {...redirectProps} />
  };
}