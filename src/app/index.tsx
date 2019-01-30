/// <reference path="definitions/index.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ColourWheel from './components/ColourWheel/ColourWheel';
import Header from './components/Header/Header';
import { GlobalStyle, Main } from './layout';

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <Header>lightyBoy</Header>
    <Main>
      <ColourWheel />
    </Main>
  </React.Fragment>,
  document.getElementById('App'),
);
