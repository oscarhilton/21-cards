import React from 'react';
import styled from 'styled-components';
import SuitIcon from "../atoms/SuitIcon.atom";

interface Props {
  name: string;
  suit: string;
}

interface styledProps {
  symbol: string;
}

const Container = styled.div`
  width: 200px;
  height: 300px;
  background: white;
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
  flex-shrink: 0;
  position: relative;
  display: flex;
  align-items: center;

  &::before, &::after {
    content: ${(p: styledProps)  => p.symbol ? `'${p.symbol}'` : 'none'};
    display: block;
    background: transparent;
    position: absolute;
    top: 14px;
    left: 14px;
    bottom: 14px;
    right: 14px;
  }

  &::after {
    transform: rotate(180deg);
  }
`;

const SuitHolder = styled.div`
  width: 80%;
  height: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;

export default function Card(props: Props) {
  const firstLetterIsANumber = !isNaN(parseInt(props.name.charAt(0), 10));

  const returnFirstLetterIfNotANumericCard = (name: string) => {
    if (firstLetterIsANumber) return name;
    return name.charAt(0);
  }

  const cardSymbol = returnFirstLetterIfNotANumericCard(props.name);
  const numberOfSuitSymbols = firstLetterIsANumber ? parseInt(cardSymbol, 10) : 1;

  return (
    <Container symbol={cardSymbol} >
      <SuitHolder>
          {new Array(numberOfSuitSymbols).fill(null).map((_, index) => (
            <SuitIcon suit={props.suit} large={!firstLetterIsANumber} rotate={index > 3 && index + 1 > numberOfSuitSymbols / 2} />
          ))}
      </SuitHolder>
    </Container>
  );
};