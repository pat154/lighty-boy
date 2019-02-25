import * as React from 'react';

import H1 from '../../elements/H1';
import Header, { HeaderAccent } from './Header.styles';

export default (props: any) => {
  return (
    <Header>
      <H1>
        lighty
        <HeaderAccent
          accentColour={props.accentColour}
          className="Header__accent">B</HeaderAccent>oy
      </H1>
    </Header>
  );
};
