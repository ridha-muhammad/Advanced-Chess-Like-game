const http = require('http');
const WebSocket = require('ws');
const { processMove, initializeGame } = require('./gameLogic');

const server = http.createServer();
const wss = new WebSocket.Server({ server });

let gameState = initializeGame();

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    const move = JSON.parse(message);
    const response = processMove(move, gameState);
    if (response.valid) {
      gameState = response.state;
    }
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(response));
      }
    });
  });
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
