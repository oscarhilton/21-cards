import COLOURS from "./colours";
import { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
  gameArea: COLOURS.black_dark,
  gameButton: COLOURS.black_light,
  cardColour: COLOURS.orangeRed_dark,
  cardEdge: COLOURS.orangeRed_mid,
  suits: {
    clubs: COLOURS.black_light,
    spades: COLOURS.black_light,
    diamonds: COLOURS.green_mid,
    hearts: COLOURS.green_mid,
  }
};

export default defaultTheme;
