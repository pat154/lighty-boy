import styled, { createGlobalStyle } from 'styled-components';

import { COLOUR_BODY_BACKGROUND } from '../constants';
import { HEIGHT as HEADER_HEIGHT } from '../components/Header/constants';

// tslint:disable-next-line:variable-name
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${COLOUR_BODY_BACKGROUND};
    font-family: 'Montserrat', Helvetica, sans-serif;
    box-sizing: border-box;
  };
  * {
    box-sizing: border-box;
  }
`;

// tslint:disable-next-line:variable-name
export const Main = styled.section`
  height: calc(100vh - ${HEADER_HEIGHT});
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
