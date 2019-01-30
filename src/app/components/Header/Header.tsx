import * as React from 'react';

import H1 from '../../elements/H1';

import Header from './header.style';

export default class extends React.Component {

  componentDidMount() {
  }

  public render() {
    return (
      <Header>
        <H1>
          {this.props.children}
        </H1>
      </Header>
    );
  }
}
