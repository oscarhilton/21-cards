import ky from "ky";

const DECK_OF_CARDS_API = "https://deckofcardsapi.com/api";
const api = ky.create({ prefixUrl: DECK_OF_CARDS_API });

// API Services:
export default class Api {
  static async getNewDeck(deckCount: number = 1) {
    return await api.get(`deck/new/shuffle/?deck_count=${deckCount}`).json();
  }

  static async drawACard(deckId: string, amountOfCards: number = 1) {
    return await api.get(`deck/${deckId}/draw/?count=${amountOfCards}`).json();
  }
}

// API Response shapes:

export interface newDeckResponse {
  success: boolean,
  deck_id: string,
  remaining: number;
  shuffled: boolean;
}
export interface newCardResponse {
  cards: Array<cardObject>;
}
export interface cardObject {
  suit: string;
  value: string;
}




