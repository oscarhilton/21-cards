import React from 'react';
import Api from "../services/api.service";
import Deck from "../classes/Deck.class";

interface newDeckResponse {
  success: boolean,
  deck_id: string,
  remaining: number;
  shuffled: boolean;
}

export default function useDeck() {
  const [currentDeck, setCurrentDeck] = React.useState<Deck| null>();
  const returnBrandNewDeck = (numberOfDecks: number = 1) => Api.getNewDeck(numberOfDecks);
  
  React.useEffect(() => {
    const freshDeckFromApi = async () => {
      const res = <newDeckResponse> await returnBrandNewDeck();
      setCurrentDeck(new Deck(res.deck_id));
    };
    freshDeckFromApi();
  }, []);

  return currentDeck;
}