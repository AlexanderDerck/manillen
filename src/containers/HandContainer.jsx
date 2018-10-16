import { connect} from 'react-redux';
import { playerPickedCard } from '../actions/game';
import { Hand } from '../components/Hand/Hand';

const mapStateToProps = state => ({
  cards: state.game.playerCards
});

const mapDispatchToProps = dispatch => ({
  pickCard: card => dispatch(playerPickedCard(card))
});

export default connect(mapStateToProps, mapDispatchToProps)(Hand);