const ws = new WebSocket('ws://localhost:3000');

ws.onopen = () => {
  console.log('Connected to server');
};

ws.onmessage = (message) => {
  const data = JSON.parse(message.data);
  updateGameState(data);
};

const sendMove = (move) => {
  ws.send(JSON.stringify(move));
};
