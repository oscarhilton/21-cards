import React from 'react';
import styled from 'styled-components';
import cardSuitToImagePath from "../../helpers/cardSuitToImagePath.helper";
interface Props {
  large: boolean;
  suit: string;
  rotate: boolean;
}

interface IconProps {
  large: boolean;
  icon: string;
  rotate: boolean;
}

const Icon = styled.div`
  width: ${(p: IconProps) => p.large ? "60px" : "30px"};
  height: ${(p: IconProps) => p.large ? "60px" : "30px"};
  background-image: url(${(p: IconProps) => p.icon });
  transform: rotate(${(p: IconProps) => p.rotate ? "180" : "0"}deg);
  background-size: cover;
  margin: 10px;
`;

export default function SuitIcon(props: Props) {
  return (
    <Icon icon={cardSuitToImagePath(props.suit)} large={props.large} rotate={props.rotate} />
  )
};