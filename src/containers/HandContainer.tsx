import { connect } from 'react-redux';
import { playerPickedCard } from '../actions/game';
import { State } from '../state';
import { Card } from '../models';
import { Hand } from '../components/Hand/Hand';
import { Dispatch } from 'react';

export interface StateProps {
  cards: Card[]
};
const mapStateToProps = (state: State): StateProps => ({
  cards: state.game.playerCards
});

export interface DispatchProps {
  pickCard: Dispatch<Card>
};
const mapDispatchToProps = (dispatch): DispatchProps => ({
  pickCard: (card: Card) => dispatch(playerPickedCard(card))
});

export const HandContainer = connect(mapStateToProps, mapDispatchToProps)(Hand);
