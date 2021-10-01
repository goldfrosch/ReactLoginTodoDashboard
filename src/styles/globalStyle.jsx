import { createGlobalStyle } from "styled-components";
import { Pallete } from "./Pallete";

const MainComponent = createGlobalStyle`
  body {
    background-color: ${Pallete.mainColor};
    margin: 0 auto;
  }
`;

export default MainComponent;
