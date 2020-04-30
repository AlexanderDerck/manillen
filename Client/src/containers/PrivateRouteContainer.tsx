import { connect } from 'react-redux';
import { PrivateRoute } from '../components/_common/PrivateRoute';
import { State } from '../state';

export interface StateProps {
  isAuthenticated: boolean
};
const mapStateToProps = (state: State): StateProps => ({
  isAuthenticated: state.authentication.isAuthenticated
});

export const PrivateRouteContainer = connect(mapStateToProps)(PrivateRoute);
