import * as React from 'react';
import iro from '@jaames/iro';
import styled from 'styled-components';

import { ColourWheelProps, RGBColour } from '../../../definitions/ColourWheel';
import { SOCKET_PORT_NUMBER } from '../../../server/utils/constants';

const Container = styled.div`
  height: auto;
  width: 100%;
  max-width: 500px;
`;
export default class extends React.Component<ColourWheelProps> {

  private iroColourPickerElement = React.createRef<HTMLDivElement>();
  private webSocket: WebSocket =
    new WebSocket(`ws://${document.location.hostname}:${SOCKET_PORT_NUMBER}`);

  componentDidMount() {
    try {
      const colourPicker = new iro.ColorPicker('.colourwheel', {
        display: 'inline-block',
      });
      const attachListener = (): void => {
        colourPicker.on('color:change', () => {
          const rgb = colourPicker.color.rgb as RGBColour;
          this.props.updateColour(rgb);
          const action = {
            type: 'COLOUR',
            colour: rgb,
          };
          try {
            this.webSocket.send(JSON.stringify(action));
          } catch (e) {
            alert(e);
          }
        });
      };
      if (this.webSocket.readyState !== 1) {
        this.webSocket.onopen = () => {
          attachListener();
        };
      } else {
        attachListener();
      }
    } catch (e) {
      alert(e);
    }
  }

  public render() {
    return (
      <Container>
        <div
          ref={this.iroColourPickerElement} className="colourwheel">
        </div>
      </Container>
    );
  }
}
