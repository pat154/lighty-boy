import * as React from 'react';

import H1 from '../../elements/H1';
import Header from './Header.styles';

export default (props: any) => {
  return (
    <Header accentColour={props.accentColour}>
      <H1>
        {props.children}
      </H1>
    </Header>
  );
};
