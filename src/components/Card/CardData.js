import { CardRank } from './CardRank';
import { CardSuit } from './CardSuit';

export class CardData {
  static ranks = Object.keys(CardRank).map(propName => CardRank[propName]);
  static suits = Object.keys(CardSuit).map(propName => CardSuit[propName]);

  constructor(rank, suit) {
    if(!CardData.ranks.some(val => val === rank)) {
      throw new Error(`Invalid card rank: '${rank}'`);
    }

    if(!CardData.suits.some(val => val === suit)) {
      throw new Error(`Invalid card suit: '${suit}'`);
    }

    this.rank = rank;
    this.suit = suit;
  }
};