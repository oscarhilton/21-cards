import React from 'react';
import styled from 'styled-components';
import Card from "../molecules/Card.molecule";
import CardClass from "../../classes/Card.class";
import useDeck from "../../hooks/useDeck.hook";

const TARGET = 21;

const Area = styled.div``;
const DrawnCards = styled.div`
  display: flex;
`;

export default function GameArea() {
  const currentDeck = useDeck();
  const [total, setTotal] = React.useState(0);
  const [highscore, setHighscore] = React.useState(total);
  const [score, setScore] = React.useState(0);

  const WINNER = total === TARGET;
  const LOSER = total > TARGET;

  const handleDrawCard = React.useCallback(() => {
    const drawACard = async () => {
      if (currentDeck) {
        await currentDeck.drawACard();
        setTotal(currentDeck.fetchTotal());
        setScore(currentDeck.totalCards());
      }
    }
    drawACard();
  }, [currentDeck]);

  const checkIfHighscore = React.useCallback(() => {
    if (score < highscore) {
      setHighscore(score);
    }
  }, [highscore, currentDeck, score]);

  if (WINNER) { // Player has reached 21!
    checkIfHighscore();
  }

  return ( // Game currently at play!
    <Area>
      {WINNER && <div>YOU GOT 21!! your score was {score} and the best was {highscore}</div>}
      {LOSER && <div>BUST!</div>}
      <div>score: {score}</div>
      {total}
      <DrawnCards>
        {currentDeck?.drawnCards.map(({ id, name }) => (
          <Card key={id} name={name} />
        ))}
      </DrawnCards>
      <button onClick={handleDrawCard}>CLICK ME</button>
    </Area>
  );
};