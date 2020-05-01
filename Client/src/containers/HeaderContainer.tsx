import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { loginFacebook, LoginFacebook, LogoutFacebook, logoutFacebook } from '../actions';
import { Header } from '../components';
import { User } from '../models/User';
import { State } from '../state';

export interface StateProps {
  isAuthenticated: boolean,
  user?: User
};
const mapStateToProps = (state: State): StateProps => ({
    isAuthenticated: state.authentication.isAuthenticated,
    user: state.authentication.user
});

export interface DispatchProps {
  login: Dispatch<LoginFacebook>,
  logout: Dispatch<LogoutFacebook>
};
const mapDispatchToProps = (dispatch): DispatchProps => ({
  login: () => dispatch(loginFacebook()),
  logout: () => dispatch(logoutFacebook())
});

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
