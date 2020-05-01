import { connect } from 'react-redux';
import { Game } from '../components';
import { Card } from '../models';
import { State } from '../state';

export interface StateProps {
  // Number of cards for the opponent hands
  fellowPlayerCards: number,
  opponent1Cards: number,
  opponent2Cards: number,

  // Cards on the playfield in the middle
  playerPlayedCard?: Card,
  fellowPlayerPlayedCard?: Card,
  opponent1PlayedCard?: Card,
  opponent2PlayedCard?: Card
};

const mapStateToProps = (state: State): StateProps => ({
  fellowPlayerCards: state.game.fellowPlayerCards,
  opponent1Cards: state.game.opponent1Cards,
  opponent2Cards: state.game.opponent2Cards,
  playerPlayedCard: state.game.playerPlayedCard,
  fellowPlayerPlayedCard: state.game.fellowPlayerPlayedCard,
  opponent1PlayedCard: state.game.opponent1PlayedCard,
  opponent2PlayedCard: state.game.opponent2PlayedCard
});

export const GameContainer = connect(mapStateToProps)(Game);
