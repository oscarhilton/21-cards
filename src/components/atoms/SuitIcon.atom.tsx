import React from 'react';
import styled from 'styled-components';
import cardSuitToImagePath from "../../helpers/cardSuitToImagePath.helper";
interface Props {
  large: boolean;
  suit: string;
}

interface IconProps {
  large: boolean;
  icon: string;
}

const Icon = styled.div`
  width: ${(p: IconProps) => p.large ? "60px" : "30px"};
  height: ${(p: IconProps) => p.large ? "60px" : "30px"};
  background-image: url(${(p: IconProps) => p.icon });
  background-size: cover;
  margin: 10px;
`;

export default function SuitIcon(props: Props) {
  return (
    <Icon icon={cardSuitToImagePath(props.suit)} large={props.large} />
  )
};