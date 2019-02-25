/// <reference path="definitions/index.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import ColourWheel from './components/ColourWheel/ColourWheelContainer';
import Header from './components/Header/HeaderContainer';
import { HEIGHT as HEADER_HEIGHT } from './components/Header/constants';
import { GlobalStyle, Main } from './layout';


const colourWheelMaxHeight = `calc(100vh - ${HEADER_HEIGHT}`;

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Header />
    <Main>
      <ColourWheel />
    </Main>
  </Provider>,
  document.getElementById('App'),
);
