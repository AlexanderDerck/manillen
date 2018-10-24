import { Ranks } from 'constants/card';
import { Suits } from 'constants/card';

export class Card {
  static ranks = Object.keys(Ranks).map(propName => Ranks[propName]);
  static suits = Object.keys(Suits).map(propName => Suits[propName]);

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