import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { Hand } from '../components/Hand/Hand';
import { Card } from '../models';
import { playerPickedCard } from '../store';
import { RootState } from '../store/root.state';

export interface StateProps {
  cards: Card[]
};
const mapStateToProps = (state: RootState): StateProps => ({
  cards: state.game.playerCards
});

export interface DispatchProps {
  pickCard: Dispatch<Card>
};
const mapDispatchToProps = (dispatch): DispatchProps => ({
  pickCard: (card: Card) => dispatch(playerPickedCard({card}))
});

export const HandContainer = connect(mapStateToProps, mapDispatchToProps)(Hand);
