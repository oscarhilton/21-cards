import getRandomRange from "helpers/getRandomRange";
export default class Card {
  public id: string;
  public name: string;
  public value: number;
  public suit: string;
  public startingRotation: number;
  public endingRotation: number;

  constructor(name: string, value: number, suit: string) {
    this.id = '_' + Math.random().toString(36).substr(2, 9);
    this.name = name;
    this.value = value;
    this.suit = suit;
    this.startingRotation = getRandomRange(0, 10);
    this.endingRotation = this.startingRotation - getRandomRange(0, 30);
  }
}