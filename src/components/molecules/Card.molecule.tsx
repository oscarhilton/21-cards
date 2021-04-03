import React from 'react';
import styled from 'styled-components';
import SuitIcon from "components/atoms/SuitIcon.atom";
import { useSpring, animated, config } from 'react-spring';

export default function Card(props: Props) {
  const animationProps = useSpring({
    from: {
      transform: `scale(3) rotate(${props.startingRotation}deg) translate(100%, 100%)`,
      boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',
    },
    to: {
      transform: `scale(1) rotate(${props.endingRotation}deg) translate(0, 0)`,
      boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.2)',      
    },
    config: config.default
  });

  const firstLetterIsANumber = !isNaN(parseInt(props.name.charAt(0), 10));

  const returnFirstLetterIfNotANumericCard = (name: string) => {
    if (firstLetterIsANumber) return name;
    return name.charAt(0);
  }

  const cardSymbol = returnFirstLetterIfNotANumericCard(props.name);
  const numberOfSuitSymbols = firstLetterIsANumber ? parseInt(cardSymbol, 10) : 1;

  return (
    <Container style={animationProps} symbol={cardSymbol} >
      <SuitHolder>
          {new Array(numberOfSuitSymbols).fill(null).map((_, index) => (
            <SuitIcon key={index} suit={props.suit} large={!firstLetterIsANumber} rotate={(index > 3 ) && (index + 1 > numberOfSuitSymbols / 2 )} />
          ))}
      </SuitHolder>
    </Container>
  );
};

interface Props {
  name: string;
  suit: string;
  startingRotation: number;
  endingRotation: number;
}

interface styledProps {
  symbol: string;
}

const Container = styled(animated.div)`
  width: 200px;
  height: 300px;
  background: ${p => p.theme.cardColour};
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
  flex-shrink: 0;
  position: relative;
  display: flex;
  align-items: center;
  border: solid 4px ${p => p.theme.cardEdge};

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