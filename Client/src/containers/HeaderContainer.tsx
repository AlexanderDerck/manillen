import { connect } from 'react-redux';
import { Header } from '../components';
import { User } from '../models';
import { loginFacebook, logoutFacebook } from '../store';
import { RootState } from '../store/root.state';

export interface StateProps {
  isAuthenticated: boolean,
  user?: User
};
const mapStateToProps = (state: RootState): StateProps => ({
    isAuthenticated: state.user.isAuthenticated,
    user: state.user.user
});

export interface DispatchProps {
  login: () => void,
  logout: () => void
};
const mapDispatchToProps = (dispatch): DispatchProps => ({
  login: () => dispatch(loginFacebook()),
  logout: () => dispatch(logoutFacebook())
});

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
