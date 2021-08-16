import api, { newDeckResponse, newCardResponse, cardObject } from "../services/api.service";
import Card from "./Card.class";
import cardValueToNumericValue from "../helpers/cardValueToNumericValue.helper";

export default class Deck {
  static async brandNewDeck(numberOfDecks: number): Promise<string> {
    try {
      const res = await api.getNewDeck(numberOfDecks) as newDeckResponse;
      return res.deck_id;
    } catch (e) {
      return e;
    }
  }

  static async drawACard(deckId: string): Promise<Card>  {
    try {
      const res = await api.drawACard(deckId) as newCardResponse;
      const { value, suit } = res.cards[0] as cardObject;
      return new Card(value, cardValueToNumericValue(value), suit);
    } catch (e) {
      return e;
    }
  }

  static fetchTotal(gameCards: Card[]): number {
    if (gameCards.length === 0) return 0;
    return gameCards.reduce((total, currentCard) => {
      return total + currentCard.value;
    }, 0);
  }

  static getNumberOfCardsDrawn(gameCards: Card[]): number {
    return gameCards.length;
  }
}