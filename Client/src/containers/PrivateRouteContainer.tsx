import { connect } from 'react-redux';
import { RouteProps } from 'react-router-dom';
import { PrivateRoute } from '../components';
import { State } from '../state';

export interface PrivateRouteProps extends RouteProps, StateProps { };

interface StateProps {
  isAuthenticated: boolean
};
const mapStateToProps = (state: State): StateProps => ({
  isAuthenticated: state.authentication.isAuthenticated
});

export const PrivateRouteContainer = connect(mapStateToProps)(PrivateRoute);
