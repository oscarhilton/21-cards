import React from 'react';
import styled from 'styled-components';
import Card from "../molecules/Card.molecule";
import useDeck, { GAME_STATES } from "../../hooks/useDeck.hook";

// STYLING
const Area = styled.div``;
const DrawnCards = styled.div`
  display: flex;
  width: 100%;
  overflow-y: auto;
`;

// COMPONENT
export default function GameArea() {
  const {
    startGame,
    drawnCards,
    total,
    score,
    gameState,
    drawNewCard,
  } = useDeck();

  React.useEffect(() => {
    startGame();
  }, []);

  const displayGameState = () => {
    switch(gameState) {
      case GAME_STATES.WINNER:
        return <div>U R WINNA</div>;
      case GAME_STATES.BUST:
        return <div>U R LOSA</div>;
    }
  }

  const displayGameButton = () => {
    switch(gameState) {
      case GAME_STATES.WINNER:
        return <button onClick={startGame}>Play again?</button>;
      case GAME_STATES.BUST:
        return <button onClick={startGame}>Try again?</button>;
      default:
        return <button onClick={drawNewCard}>Draw {score > 0 && 'another '}card</button>;
    }
  }

  return ( // Game currently at play!
    <Area>
      <div>score: {score}</div>
      <div>total: {total}</div>
      {displayGameState()}
      <DrawnCards>
        {drawnCards.map(({ id, name, suit }) => (
          <Card key={id} name={name} suit={suit} />
        ))}
      </DrawnCards>
      {displayGameButton()}
    </Area>
  );
};