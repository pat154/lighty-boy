import * as React from 'react';
import iro from '@jaames/iro';

import ColourWheelContainer from './ColourWheelContainer';

export default class extends React.Component {

  private iroColourPickerElement = React.createRef<HTMLDivElement>();
  private webSocket: WebSocket = new WebSocket(`ws://${document.location.hostname}:8080`);

  componentDidMount() {
    try {
      const colourPicker = new iro.ColorPicker('.colourwheel', {
        display: 'inline-block',
      });
      const attachListener = (): void => {
        colourPicker.on('color:change', () => {
          try {
            this.webSocket.send(JSON.stringify(colourPicker.color.rgb));
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
      <ColourWheelContainer>
        <div
          style={{ height: '100%' }}
          ref={this.iroColourPickerElement} className="colourwheel">
        </div>
      </ColourWheelContainer>
    );
  }
}
