import { Rank } from './constants/Rank';
import { Suit } from './constants/Suit';

export class Card {
  static ranks = Object.keys(Rank).map(propName => Rank[propName]);
  static suits = Object.keys(Suit).map(propName => Suit[propName]);

  constructor(rank, suit) {
    if(!Card.ranks.some(val => val === rank)) {
      throw new Error(`Invalid card rank: '${rank}'`);
    }

    if(!Card.suits.some(val => val === suit)) {
      throw new Error(`Invalid card suit: '${suit}'`);
    }

    this.rank = rank;
    this.suit = suit;
  }
};