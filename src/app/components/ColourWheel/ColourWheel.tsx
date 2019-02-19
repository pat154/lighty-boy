import * as React from 'react';
import iro from '@jaames/iro';
import styled from 'styled-components';

import { ColourWheelProps, RGBColour } from '../../definitions/ColourWheel';

const Container = styled.div`
  height: auto;
  width: 100%;
`;
export default class extends React.Component<ColourWheelProps> {

  private iroColourPickerElement = React.createRef<HTMLDivElement>();
  private webSocket: WebSocket = new WebSocket(`ws://${document.location.hostname}:8080`);

  componentDidMount() {
    try {
      const colourPicker = new iro.ColorPicker('.colourwheel', {
        display: 'inline-block',
      });
      const attachListener = (): void => {
        colourPicker.on('color:change', () => {
          const rgb = colourPicker.color.rgb as RGBColour;
          this.props.updateColour(rgb);
          try {
            this.webSocket.send(JSON.stringify(rgb));
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
