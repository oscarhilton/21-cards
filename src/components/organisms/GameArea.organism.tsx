import React from 'react';
import styled from 'styled-components';
import Card from "components/molecules/Card.molecule";
import useDeck, { GAME_STATES } from "hooks/useDeck.hook";

const WINNING_STRING = "You won!";
const LOSING_STRING = "You went bust!";

// COMPONENT
export default function GameArea() {
  const {
    startGame,
    drawnCards,
    total,
    score,
    highScore,
    gameState,
    drawNewCard,
  } = useDeck();

  React.useEffect(() => {
    startGame();
  }, []);

  const displayGameState = () => {
    switch(gameState) {
      case GAME_STATES.WINNER:
        return WINNING_STRING;
      case GAME_STATES.BUST:
        return LOSING_STRING;
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
      <HighScore>High Score: {highScore}</HighScore>
      <DrawnCards>
        <Total>{total}</Total>
        {(gameState !== GAME_STATES.PLAYING) && <GameState>{displayGameState()}</GameState>}
        {drawnCards.map(({ id, name, suit, startingRotation, endingRotation }) => (
          <CardContainer key={id}>
            <Card name={name} suit={suit} startingRotation={startingRotation} endingRotation={endingRotation} />
          </CardContainer>
        ))}
      </DrawnCards>
      <Score>Current Score: {score}</Score>
      <ButtonContainer>
        {displayGameButton()}
      </ButtonContainer>
    </Area>
  );
};

// STYLING
const Area = styled.div`
  min-height: 100vh;
  position: relative;
`;
const HighScore = styled.div`
  text-align: right;
  padding: 30px;
`;
const Score = styled.div`
  text-align: center;
  padding: 30px;
`;
const CentralText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  text-align: center;
  margin: auto;
  justify-content: center;
  line-height: 1;
`;
const Total = styled(CentralText)`
  z-index: 10;
  opacity: 0.6;
  font-size: 30vh;
  color: ${p => p.theme.gameScoreText};
`;
const GameState = styled(CentralText)`
  z-index: 10;
  opacity: 1;
  font-size: 5rem;
  background: rgba(0, 0, 0, 0.4);
  color: ${p => p.theme.gameStateText};
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
const ButtonContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
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