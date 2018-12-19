import HttpServer from './HttpServer/HttpServer';
import SocketServer from './SocketServer/SocketServer';

import { HTTP_PORT_NUMBER, SOCKET_PORT_NUMBER } from './utils/constants';

// Start the HTTP and WebSocket server
export default () => {
  const wss = SocketServer.create(SOCKET_PORT_NUMBER);
  console.log(`WebSocket server running on port: ${SOCKET_PORT_NUMBER}`);
  HttpServer.listen(HTTP_PORT_NUMBER);
  console.log(`Http server running on port: ${HTTP_PORT_NUMBER}`);
};

/**
  Purposes of Node Backend:
  - Serve a webpage
    - Colourwheel
    - Options for switching to predefined modes

  - Create a WebSocket with webpage
    - Websocket will allow for faster response between page interactions
    and visual result

  - Receive inputs from webpage
    - Receive colour/light information from the front end and translate them
    to commandline/python commands for visual output
*/
