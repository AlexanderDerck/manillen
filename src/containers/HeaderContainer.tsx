import { connect } from 'react-redux';
import { State } from '../state';
import { Header } from '../components/Header';

export interface StateProps {
  isAuthenticated: boolean
};

function mapStateToProps(state: State): StateProps {
  return {
    isAuthenticated: state.authentication.isAuthenticated
  };
}

export const HeaderContainer = connect(mapStateToProps)(Header);
