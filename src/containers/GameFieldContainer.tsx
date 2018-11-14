import { connect} from 'react-redux';
import { State } from '../state';
import { GameField } from '../components/GameField';

export interface StateProps {
  fellowPlayerCards: number,
  opponent1Cards: number,
  opponent2Cards: number
};
const mapStateToProps = (state: State): StateProps => ({
  fellowPlayerCards: state.game.fellowPlayerCards,
  opponent1Cards: state.game.opponent1Cards,
  opponent2Cards: state.game.opponent2Cards
});

export const GameFieldContainer = connect(mapStateToProps)(GameField);