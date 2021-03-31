export default class Game {
  score: number;
  private scores: number[];

  constructor () {
    console.log("IM A GAME");
    this.score = 0;
    this.scores = [];
  }
}