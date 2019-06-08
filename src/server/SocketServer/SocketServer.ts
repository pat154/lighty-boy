import ws from 'ws';
import { setColour } from '../utils/lights';
import { WebSocketAction } from '../../definitions/WebSocketAction';
import Cync from './cync';

const create = (port: number): ws.Server => {
  const wss = new ws.Server({ port });
  wss.on('connection', (ws: ws) => {
    console.log('connection established');

    ws.on('message', (message: string) => {

      const msg = JSON.parse(message) as WebSocketAction;

      console.log(msg.type);
      switch (msg.type) {
        case 'CYNC':
          Cync(msg.action);
          break;
        case 'COLOUR':
          setColour(msg.colour);
          break;
        default:
          null;
      }

      // Broadcast to everyone else.
      // wss.clients.forEach((client) => {
      //   if (client !== ws && client.readyState === ws.OPEN) {
      //     client.send(message); 
      //   }
      // });
    });
  });
  return wss;
};

export default {
  create,
};
