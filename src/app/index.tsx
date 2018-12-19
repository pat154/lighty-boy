/// <reference path="definitions/index.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ColourWheel from './components/ColourWheel/ColourWheel';

ReactDOM.render(
  <React.Fragment>
    <ColourWheel />
  </React.Fragment>,
  document.getElementById('App'),
);
