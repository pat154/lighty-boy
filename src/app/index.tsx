/// <reference path="definitions/index.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import ColourWheel from './components/ColourWheel/ColourWheelContainer';
import Header from './components/Header/HeaderContainer';
import { GlobalStyle, Main } from './layout';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    { console.log(store) }
    <Header>
      lighty<span className="Header__accent">B</span>oy
    </Header>
    <Main>
      <ColourWheel />
    </Main>
  </Provider>,
  document.getElementById('App'),
);
