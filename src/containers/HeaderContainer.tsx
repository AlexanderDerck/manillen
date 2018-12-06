import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State } from '../state';
import { Header } from '../components/Header';
import { login, Login } from '../actions';

export interface StateProps {
  isAuthenticated: boolean
};
const mapStateToProps = (state: State): StateProps => ({
    isAuthenticated: state.authentication.isAuthenticated
});

export interface DispatchProps {
  login: Dispatch<Login>
}
const mapDispatchToProps = (dispatch): DispatchProps => ({
  login: () => dispatch(login())
});

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
