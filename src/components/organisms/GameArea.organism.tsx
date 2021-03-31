import React from 'react';
import styled from 'styled-components';
import Card from "../molecules/Card.molecule";
import useDeck from "../../hooks/useDeck.hook";

const Area = styled.div``;

export default function GameArea() {
  const currentDeck = useDeck();

  React.useEffect(() => {

  }, []);

  return (
    <Card name="JACK" />
  );
};