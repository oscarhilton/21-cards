import React from 'react';
import styled from 'styled-components';
import cardSuitToImagePath from "../../helpers/cardSuitToImagePath.helper";

const Icon = styled.div`
  width: ${(p: IconProps) => p.large ? "60px" : "30px"};
  height: ${(p: IconProps) => p.large ? "60px" : "30px"};
  transform: rotate(${(p: IconProps) => p.rotate ? "180" : "0"}deg);
  background: ${p => p.theme.suits[p.suit.toLocaleLowerCase()]};
  background-size: cover;
  margin: 10px;
  mask: url(${(p: IconProps) => p.icon }) no-repeat center / contain;
  -webkit-mask: url(${(p: IconProps) => p.icon }) no-repeat center / contain;
`;

export default function SuitIcon(props: Props) {
  return (
    <Icon suit={props.suit} icon={cardSuitToImagePath(props.suit)} large={props.large} rotate={props.rotate && props.rotate} />
  )
};
interface Props {
  large: boolean;
  suit: string;
  rotate: boolean;
}

interface IconProps {
  large: boolean;
  icon: string;
  rotate: boolean;
  suit: string;
}