export default class Card {
  name: string;
  value: number;
  suit: string;

  constructor(name: string, value: number, suit: string) {
    this.name = name;
    this.value = value;
    this.suit = suit;
  }
}