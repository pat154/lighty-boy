import connect from 'connect';
import serveStatic from 'serve-static';
import http from 'http';

const app = connect();
const serve = serveStatic('./dist', {
  index: ['index.html', 'index.htm'],
}) as connect.HandleFunction;

app.use(serve);

const server = http.createServer(app);

export default server;
