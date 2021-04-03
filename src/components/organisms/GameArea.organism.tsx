import React from 'react';
import styled from 'styled-components';
import Card from "components/molecules/Card.molecule";
import useDeck, { GAME_STATES } from "hooks/useDeck.hook";

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
        return <GameButton onClick={startGame}>Play again?</GameButton>;
      case GAME_STATES.BUST:
        return <GameButton onClick={startGame}>Try again?</GameButton>;
      default:
        return <GameButton onClick={drawNewCard}>Draw {score > 0 && 'another '}card</GameButton>;
    }
  }

  return ( // Game currently at play!
    <Area>
      <DrawnCards>
        <div>total: {total}</div>
        {displayGameState()}
        {drawnCards.map(({ id, name, suit, startingRotation, endingRotation }) => (
          <CardContainer key={id}>
            <Card name={name} suit={suit} startingRotation={startingRotation} endingRotation={endingRotation} />
          </CardContainer>
        ))}
      </DrawnCards>
      <div>score: {score}</div>
      {displayGameButton()}
    </Area>
  );
};

// STYLING
const Area = styled.div`
  min-height: 100vh;
`;
const DrawnCards = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  background: ${p => p.theme.gameArea};
  overflow: hidden;
`;
const CardContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const GameButton = styled.button`
  position: relative;
  background: ${p => p.theme.gameButton};
  border: 0;
  padding: 20px 60px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  transform: translateY(0);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0);
    transform: translateY(2px);
  }

  &:focus {
    outline:0;
  }
`;