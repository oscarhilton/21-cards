import api from "../services/api.service";
import Card from "./Card.class";
import cardValueToNumericValue from "../helpers/cardValueToNumericValue.helper";

interface cardObject {
  suit: string;
  value: string;
}
interface newCardResponse {
  cards: Array<cardObject>;
}
export default class Deck {
  id: string;
  public drawnCards: Card[];

  constructor(id: string) {
    this.id = id;
    this.drawnCards = [];
  }

  async drawACard() {
    const res = <newCardResponse> await api.drawACard(this.id);
    const { value, suit } = <cardObject>res.cards[0];
    const newCard = new Card(value, cardValueToNumericValue(value), suit)
    this.drawnCards.push(newCard);
    return newCard;
  }

  fetchTotal() {
    if (this.drawnCards.length === 0) return 0;
    return this.drawnCards.reduce((total, currentCard) => {
      return total + currentCard.value;
    }, 0);
  }

  totalCards() {
    return this.drawnCards.length;
  }
}