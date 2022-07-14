const express = require('express');
const cors = require('cors');
const path = require('path');
const userRouter = require('./router/user');
const topicRouter = require('./router/topic');
const WebSocket = require('ws');

const PORT = process.env.PORT || 4000;
const app = express();
const server = require('http').createServer(app);

app.use('/', express.static(path.join(__dirname, 'static')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/auth', userRouter);
app.use('/api/topic', topicRouter);



const wss = new WebSocket.Server({ server:server });

wss.on('connection', function connection(ws) {
  console.log('A new client Connected!');
  ws.send('Welcome New Client!');

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);

    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
        });
});


  app.listen(PORT, () => {
          console.log(`The server is listening in the port: ${PORT}`);
      });