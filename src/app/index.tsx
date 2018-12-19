/// <reference path="definitions/index.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Colourwheel from './components/Colourwheel/Colourwheel';

ReactDOM.render(
  <React.Fragment>
    <Colourwheel />
  </React.Fragment>,
  document.getElementById('App'),
);
