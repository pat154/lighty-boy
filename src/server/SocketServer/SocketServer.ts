import ws from 'ws';

const create = (port: number): ws.Server => {
  const wss = new ws.Server({ port });
  wss.on('connection', (ws: ws) => {
    console.log('connection established');
    ws.on('message', (message) => {
      // Broadcast to everyone else.
      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === ws.OPEN) {
          client.send(message);
        }
      });
    });
  });
  return wss;
};

export default {
  create,
};