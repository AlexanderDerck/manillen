import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../state';
import { Header } from '../components/Header';
import { loginFacebook, LoginFacebook } from '../actions';
import { User } from '../models/User';

export interface StateProps {
  isAuthenticated: boolean,
  user?: User
};
const mapStateToProps = (state: State): StateProps => ({
    isAuthenticated: state.authentication.isAuthenticated,
    user: state.authentication.user
});

export interface DispatchProps {
  login: Dispatch<LoginFacebook>
}
const mapDispatchToProps = (dispatch): DispatchProps => ({
  login: () => dispatch(loginFacebook())
});

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
