import React from 'react';
import Deck from "classes/Deck.class";
import Card from "classes/Card.class";

const TARGET = 21;
export const GAME_STATES = {
  IDLE: "idle",
  PLAYING: "playing",
  BUST: "bust",
  WINNER: "winner",
};
const INITIAL_STATE = <stateInstance> {
  deck: null,
  drawnCards: [],
  valueTotal: 0,
  score: 0,
  highScore: 0,
};

export default function useDeck() {
  const [deck, setDeck] = React.useState(INITIAL_STATE.deck);
  const [drawnCards, setDrawnCards] = React.useState(INITIAL_STATE.drawnCards);
  const [highScore, setHighScore] = React.useState(INITIAL_STATE.highScore);

  const fetchNewDeck = async (numberOfDecks: number) => {
    setDeck(await Deck.brandNewDeck(numberOfDecks));
  };

  const drawNewCard = async () => {
    if (!deck) return;
    setDrawnCards([...drawnCards, await Deck.drawACard(deck)]);
  };

  const total = React.useMemo(() => Deck.fetchTotal(drawnCards), [drawnCards]);
  const score = React.useMemo(() => Deck.getNumberOfCardsDrawn(drawnCards), [drawnCards]);
  const gameState = React.useMemo(() => {
    if (total === TARGET) return GAME_STATES.WINNER;
    if (total > TARGET) return GAME_STATES.BUST;
    return GAME_STATES.PLAYING;
  }, [total]);

  React.useEffect(() => {
    if (gameState === GAME_STATES.WINNER) {
      if (score > highScore) {
        setHighScore(score);
      }
    }
  }, [gameState, score, highScore]);

  const startGame = () => {
    setDrawnCards(INITIAL_STATE.drawnCards);
    fetchNewDeck(1);
  }

  return {
    startGame,
    drawnCards,
    total,
    score,
    highScore,
    gameState,
    drawNewCard,
  };
}

interface stateInstance {
  deck: string | null,
  drawnCards: Card[],
  valueTotal: number,
  score: number,
  highScore: number,
}