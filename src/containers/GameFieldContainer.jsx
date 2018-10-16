import { connect} from 'react-redux';
import { GameField } from '../components/GameField';

const mapStateToProps = state => ({
  fellowPlayerCards: state.game.fellowPlayerCards,
  opponent1Cards: state.game.opponent1Cards,
  opponent2Cards: state.game.opponent2Cards
});

export default connect(mapStateToProps)(GameField);