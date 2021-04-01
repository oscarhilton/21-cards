import React from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
}

const Container = styled.div`
  width: 200px;
  height: 300px;
  background: blue;
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
  flex-shrink: 0;
`;

export default function Card(props: Props) {
  const returnFirstLetterIfNotANumericCard = (name: string) => {
    const firstLetterIsANumber = !isNaN(parseInt(name.charAt(0), 10));
    if (firstLetterIsANumber) return name;
    return name.charAt(0);
  }

  return (
    <Container>{returnFirstLetterIfNotANumericCard(props.name)}</Container>
  );
};