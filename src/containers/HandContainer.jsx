import { connect} from 'react-redux';
import { gameCardClicked } from '../actions/game';
import { Hand } from '../components/Hand/Hand';

const mapStateToProps = state => ({
  cards: state.remainingCards
});

const mapDispatchToProps = dispatch => ({
  pickCard: card => dispatch(gameCardClicked(card))
});

export default connect(mapStateToProps, mapDispatchToProps)(Hand);