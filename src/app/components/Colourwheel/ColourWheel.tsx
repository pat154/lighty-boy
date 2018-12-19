import * as React from 'react';
import iro from '@jaames/iro';

export default class extends React.Component {

  private iroColourPickerElement = React.createRef<HTMLDivElement>();
  private webSocket = new WebSocket('ws://192.168.1.102:8080');

  componentDidMount() {
    try {
      const colourPicker = new iro.ColorPicker('.colourwheel');
      const attachListener = () => {
        colourPicker.on('color:change', () => {
          try {
            this.webSocket.send(JSON.stringify(colourPicker.color.rgb));
          } catch (e) {
            alert(e);
          }
        });
      };
      if (this.webSocket.readyState !== 1) {
        alert('setting onopen');
        this.webSocket.onopen = () => {
          alert('connection open');
          attachListener();
        };
      } else {
        alert('attaching');
        attachListener();
      }
    } catch (e) {
      alert(e);
    }
  }

  public render() {
    return <div ref={this.iroColourPickerElement} className="colourwheel"></div>;
  }
}
