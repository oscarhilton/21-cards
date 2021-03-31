export default class Card {
  public id: string;
  public name: string;
  public value: number;
  public suit: string;

  constructor(name: string, value: number, suit: string) {
    this.id = '_' + Math.random().toString(36).substr(2, 9);
    this.name = name;
    this.value = value;
    this.suit = suit;
  }
}