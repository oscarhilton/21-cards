import ky from "ky";

const DECK_OF_CARDS_API = "https://deckofcardsapi.com/api";
const api = ky.create({ prefixUrl: DECK_OF_CARDS_API });

export default class Api {
  static async getNewDeck(deckCount: number = 1) {
    const res = await api.get(`deck/new/shuffle/?deck_count=${deckCount}`).json();
    return res;
  }
}



