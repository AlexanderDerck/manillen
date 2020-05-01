import { connect } from 'react-redux';
import { RouteProps } from 'react-router-dom';
import { PrivateRoute } from '../components';
import { RootState } from '../store/root.state';

export interface PrivateRouteProps extends RouteProps, StateProps { };

interface StateProps {
  isAuthenticated: boolean
};
const mapStateToProps = (state: RootState): StateProps => ({
  isAuthenticated: state.user.isAuthenticated
});

export const PrivateRouteContainer = connect(mapStateToProps)(PrivateRoute);
